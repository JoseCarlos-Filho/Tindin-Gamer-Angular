import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Login } from '../interfaces/login'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginURL = `${environment.apiUrl}auth`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { };

  login(login: Login): Observable<Login> {
    console.log('Executou login Service')
    return this.http.post<Login>(this.loginURL, login, this.httpOptions).pipe(

      map(data => {
        console.log(data)
        return data;
      })

    );
  }


}
