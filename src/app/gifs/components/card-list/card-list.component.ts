import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  templateUrl: './card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent { }
