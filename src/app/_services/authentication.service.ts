import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        console.log('`${environment.apiUrl}login`', `${environment.apiUrl}login`);
        console.log('email', email);
        console.log('password', password);
        return this.http.post(`${environment.apiUrl}login`, {
            'params': {
                'email': email,
                'password': password
            }
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}