import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl:'./home-page.component.html' ,
})
export class HomePageComponent {

  constructor(private gifsService: GifsService){}

  get gifs(): Gifs[]{
    return this.gifsService.gifList;
  }
}
