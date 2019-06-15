import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(user: any) {
        return this.http.post(`${environment.apiUrl}message/save`, {
            'params': {
                'message': user.message,
                'accessLimit': user.displayCount,
                'downlaodLimit': user.downlaodLimit,
                "timeLimit": user.timeLimit
            }
        });
    }

    getUrl(key: any) {
        return this.http.get(`${environment.apiUrl}user/get?id=${key}`);
    }


}