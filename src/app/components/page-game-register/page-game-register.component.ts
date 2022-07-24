import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Game } from '../../interfaces/game';
import { GameService } from '../../services/game.service';
@Component({
  selector: 'app-page-game-register',
  templateUrl: './page-game-register.component.html',
  styleUrls: ['./page-game-register.component.css']
})
export class PageGameRegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    title: '',
    description: '',
    genres: [],
  });

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //this.login.email = this.loginForm.value.email?.toString();
    //this.login.password = this.loginForm.value.password?.toString();
    const game: Game = {
      title: this.registerForm.value.title?.toString(),
      description: this.registerForm.value.description?.toString(),
      photos: [],
      // genres: this.registerForm.value.genres
      // title: this.registerForm.value.title?.toString(),
      // description: this.registerForm.value.description?.toString(),
    };
    console.log(game);
    // Process checkout data here
    let algumacoisa = this.gameService.addGame(game).subscribe(game => {
      console.log(game)
    })
    console.log(algumacoisa);
    //console.warn('Your order has been submitted', this.loginForm.value);
    //this.loginForm.reset();
  }


}
