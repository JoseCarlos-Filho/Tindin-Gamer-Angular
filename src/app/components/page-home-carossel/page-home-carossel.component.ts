import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game'
@Component({
  selector: 'app-page-home-carossel',
  templateUrl: './page-home-carossel.component.html',
  styleUrls: ['./page-home-carossel.component.css']
})
export class PageHomeCarosselComponent implements OnInit {

  games: Game[] = []

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      (data) => {
        data.games.forEach((game) => console.log(game.photos[0].url))
        console.log(data.games)
        this.games = data.games;
      },
      (error) => {
        console.log(error)
      }
    );

  }

}
