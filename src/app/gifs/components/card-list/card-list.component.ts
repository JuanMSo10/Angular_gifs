import { Component, Input } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input()
  public gifs: Gifs[] = [];
}
