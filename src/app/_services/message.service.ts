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
                "timeLimit": data.timeLimit
            }
        });
    }

    getURL(key: any) {
        return this.http.get(`${environment.apiUrl}user/get?id=${key}`);
    }

    shareURL(data: any) {
        return this.http.post(`${environment.apiUrl}sendEmail`, {
            'params': {
                "name": "Solanki Ram",
                "email": "ram.solanki@viitor.cloud",
                "link": 'http://192.168.1.143:4200/' + data
            }
        });
    }


}