import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {

  constructor(private http: Http,
              private router: Router) { }

  login(email: string, password: string) {
    return this.http.post('https://lishe-360.herokuapp.com/api/v1/users/signin',    //http://localhost:8000/api/v1/users
    { email: email, password: password }, 
    {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
        .map(
          (response:Response) => {
            const token = response.json().token;
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            return {token: token, decoded: JSON.parse(window.atob(base64))};
            }
            )
            .do(
              tokenData => {
                localStorage.setItem('token', tokenData.token );
              }
            );

           
        }


  logout() {
      // remove user from local storage to log user out
      console.log('attempt to remove token');
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
  }

}
