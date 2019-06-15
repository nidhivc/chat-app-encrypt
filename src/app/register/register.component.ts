﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../_services';

@Component({ templateUrl: 'register.component.html', styleUrls: ['register.component.scss'] })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            message: ['', Validators.required],
            displayCount: ['', Validators.required],
            destroyTime: ['', Validators.required],
            downlaodLimit: [''],

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                (data: any) => {
                    // if (data.code == 200) {        
                    this.userService.getUrl(data.key)                       
                        .subscribe(
                            (data: any) => {                               
                                this.router.navigate(['/login', { 'link': data.key }]);                                
                            },
                            error => {
                                this.alertService.error(error);
                                this.loading = false;
                            });                    
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
