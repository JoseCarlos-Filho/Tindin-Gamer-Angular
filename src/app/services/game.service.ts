import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { RespostaGame } from '../interfaces/game'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gameURL = `${environment.apiUrlBase}games`;



  constructor(private http: HttpClient) { }

  getGames(): Observable<RespostaGame> {
    return this.http.get<RespostaGame>(this.gameURL);
  }
}
