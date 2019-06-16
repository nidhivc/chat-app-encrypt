import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { AlertService, MessageService } from '../_services';
// import {MatDialog, MatDialogConfig} from "@angular/material";
// import { DialogBoxComponent } from '../dialog-box/dialog-box.component';



@Component({
    templateUrl: 'url.component.html',
    styleUrls: ['url.component.scss']
})
export class UrlComponent implements OnInit {
    link;
    loading = false;
    message;
    accessLimit: any = 0
    email
    acccessCount;
    user_name
    showOptions: boolean = false;
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
    openURL() {
        this.showOptions = !this.showOptions
    }
    shareURL() {

        // const dialogConfig = new MatDialogConfig();

        // dialogConfig.disableClose = true;
        // dialogConfig.autoFocus = true;

        // this.dialog.open(DialogBoxComponent, dialogConfig);

        // // let email = alert("Enter Email :")
        console.log('this.email', this.email)
        console.log('this.user_name', this.user_name)
        let data: any = {
            'email': this.email,
            'user_name': this.user_name,
            'link': 'http://192.168.1.143:4200/' + this.link
        }
        this.loading = true;
        this.userService.shareURL(data)
            .subscribe(
                (data: any) => {
                    this.alertService.success('Email sent successfully', true);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}