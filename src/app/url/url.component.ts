import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { AlertService, MessageService } from '../_services';



@Component({
    templateUrl: 'url.component.html',
    styleUrls: ['url.component.scss']
})
export class UrlComponent implements OnInit {
    link;
    loading = false;
    message;
    accessLimit = 0
    acccessCount;
    constructor(
        private router: ActivatedRoute,
        private userService: MessageService,
        private alertService: AlertService) {
        this.link = this.router.snapshot.params['link'];
        this.accessLimit = this.router.snapshot.params['accessLimit'];
        this.acccessCount = this.accessLimit
    }

    ngOnInit() {

    }
    geUrl() {
        this.loading = true;
        this.userService.getUrl(this.link)
            .subscribe(
                (data: any) => {
                    if (data != undefined) {
                        this.message = data[0].message
                        this.accessLimit--
                    }
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    shareURL() {
        this.loading = true;
        this.userService.getUrl(this.link)
            .subscribe(
                (data: any) => {
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}