import { Gifs } from './../../interfaces/gifs.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input()
  public gifs!: Gifs;


  ngOnInit(): void {
    if ( !this.gifs ) throw new Error('Gif property is required');
  }

}
