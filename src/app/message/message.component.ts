import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../_services';

@Component({ templateUrl: 'message.component.html' })
export class MessageComponent implements OnInit {
    messageForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            message: ['', Validators.required],
            displayCount: ['', Validators.required],
            destroyTime: ['', Validators.required],
            downlaodLimit: [''],

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.messageForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.messageForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.message(this.messageForm.value)
            .pipe(first())
            .subscribe(
                (data: any) => {
                    this.router.navigate(['/url', { 'link': data.key, 'accessLimit': this.messageForm.value.displayCount }]);
                    // if (data.code == 200) {        

                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
