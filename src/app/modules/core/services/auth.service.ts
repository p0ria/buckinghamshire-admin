import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  checkEmailExists(email: string): Observable<any> {
    return of(true);
  }
}
