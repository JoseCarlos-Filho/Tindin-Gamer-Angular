import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-page-home-cards',
  templateUrl: './page-home-cards.component.html',
  styleUrls: ['./page-home-cards.component.css']
})
export class PageHomeCardsComponent implements OnInit {

  @Input() games!: Game[];
  constructor() { }

  ngOnInit(): void {
  }

}
