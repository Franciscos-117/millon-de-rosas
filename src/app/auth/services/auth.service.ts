import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor() { }


  checkAuthentication(): Observable<boolean> {

    if ( !localStorage.getItem('USER') ) return of(false);

    return of(true);
  }
}
