import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
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

  login(login: Login): Observable<any> {
    console.log('Executou login Service')
    return this.http.post<any>(this.loginURL, login, this.httpOptions).pipe(

      map(data => {
        localStorage.setItem('token', JSON.stringify(data.token));
        return data;
      }),
      catchError(this.handleError<Login>('login'))

    );

    console.log('Executou fim')
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
