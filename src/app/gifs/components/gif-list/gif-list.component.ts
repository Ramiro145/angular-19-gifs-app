import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";
import { GifItem } from '../../interfaces/gif-item.interface';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListComponent {

  gifList = input<GifItem[]>();


}
