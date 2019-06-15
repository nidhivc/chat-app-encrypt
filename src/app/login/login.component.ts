import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, AlertService } from '../_services';



@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    link;
    loading = false;
    message;
    accessLimit = 0
    acccessCount;
    constructor(
        private router: ActivatedRoute,
        private userService: UserService,
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