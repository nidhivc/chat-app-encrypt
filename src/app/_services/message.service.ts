import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MessageService {
    constructor(private http: HttpClient) { }

    message(data: any) {
        return this.http.post(`${environment.apiUrl}message/save`, {
            'params': {
                'message': data.message,
                'accessLimit': data.displayCount,
                'downlaodLimit': data.downlaodLimit,
                "timeLimit": data.destroyTime
            }
        });
    }

    getURL(key: any) {
        return this.http.get(`${environment.apiUrl}user/get?id=${key}`);
    }

    shareURL(data: any) {
        return this.http.post(`${environment.apiUrl}user/sendEmail`, {
            'params': {
                "name": data.user_name,
                "email": data.email,
                "link":  data.link
            }
        });
    }


}