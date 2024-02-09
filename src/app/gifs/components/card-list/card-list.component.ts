import { Component, Input } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  templateUrl: './card-list.component.html',
  imports: [CommonModule]
})
export class CardListComponent {

  @Input()
  public gifs: Gifs[] = [];
}
