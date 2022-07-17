import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RespostaGame, Game } from '../interfaces/game'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gameURL = `${environment.apiUrl}games`;
  token = JSON.parse(localStorage.getItem('token')!)

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-key-api': this.token
     })
  };



  constructor(private http: HttpClient) { }

  getGames(): Observable<RespostaGame> {
    return this.http.get<RespostaGame>(this.gameURL);
  }

  addGame(game: Game){
    this.http.post(this.gameURL, game, this.httpOptions).subscribe(game => {
      console.log(game)
    })
  }
}
