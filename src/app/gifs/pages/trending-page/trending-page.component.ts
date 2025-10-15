import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent {

  gifList = [
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
      description:'imagen 0'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      description:'imagen 1'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      description:'imagen 2'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      description:'imagen 3'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      description:'imagen 4'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      description:'imagen 5'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      description:'imagen 6'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      description:'imagen 7'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      description:'imagen 8'
    },
  ];


}
