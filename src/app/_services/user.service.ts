import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(user: any) {
        // let params: any ={};
        // params.email = user.email
        // params.password = user.password

        return this.http.post(`${environment.apiUrl}signup`, {
            'params': {
                'email': user.email,
                'password': user.password
            }
        });
    }


}