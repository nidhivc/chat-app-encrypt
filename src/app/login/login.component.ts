import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    link;
    constructor(
        private router: ActivatedRoute) {
        this.link = this.router.snapshot.params['link'];
        console.log(this.link);
        this.link = 'http://192.168.1.143:4200/' + this.link
    }

    ngOnInit() {

    }

    // convenience getter for easy access to form fields

}