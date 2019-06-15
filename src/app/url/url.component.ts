import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, MessageService } from '../_services';
// import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    templateUrl: 'url.component.html',
    styleUrls: ['url.component.scss']
})
export class UrlComponent implements OnInit {
    link;
    loading = false;
    message;
    accessLimit: any = 0
    acccessCount;
    constructor(
        private router: ActivatedRoute,
        private route: Router,
        private userService: MessageService,
        private alertService: AlertService
        // public dialog: MatDialog
    ) {
        this.link = this.router.snapshot.params['link'];
        this.accessLimit = localStorage.getItem('accessLimit');
        this.acccessCount = this.accessLimit
    }

    ngOnInit() {

    }
    geUrl() {
        this.route.navigate(['/displayMessage', { 'link': this.link }]);
    }
    shareURL() {
        // let email = alert("Enter Email :")
        this.loading = true;
        this.userService.shareURL(this.link)
            .subscribe(
                (data: any) => {
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}