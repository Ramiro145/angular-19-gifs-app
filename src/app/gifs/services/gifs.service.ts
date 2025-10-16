import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string,Gif[]>>(this.loadFromLocalStorage());
  searchHistoryKeys = computed(()=> Object.keys(this.searchHistory()));


  saveToLocalStorage = effect(()=>{
    //al cambiar esta senial, se dispara el efecto
    localStorage.setItem('history', JSON.stringify(this.searchHistory()))
  })

  loadFromLocalStorage(): Record<string,Gif[]>{
    const history = localStorage.getItem('history');
    return history ? JSON.parse(history) : {};
  }

  constructor(){
    this.loadTrendingGifs();
  }


  loadTrendingGifs () {

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params:{
        api_key:environment.giphyApiKey,
        limit:20,
        rating:'r'
      }
    }).subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
    });

  }


  searchGifs(query:string){
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
      params:{
        api_key:environment.giphyApiKey,
        limit:20,
        rating:'r',
        q:query,
        lang:'en'
      }
    }).pipe(
      map((resp)=> GifMapper.mapGiphyItemsToGifArray(resp.data)),

      //historial
      tap(items => {
        this.searchHistory.update(history => ({...history,
          [query.toLowerCase()]:items,
        }))
      })

    )
  }


  getHistoryGifs (query:string) {
    return this.searchHistory()[query] ?? [];
  }

}
