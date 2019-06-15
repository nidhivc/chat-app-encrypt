import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private AuthenticationService: AuthenticationService,
        private alertService: AlertService) {
      
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            // firstName: ['', Validators.required],
            // lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
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
        this.AuthenticationService.login(this.registerForm.value.email, this.registerForm.value.password)
            .pipe(first())
            .subscribe(
                (data: any) => {
                    if (data.code == 200) {
                        console.log(data)
                        localStorage.setItem('usetItem', data.data);
                        this.alertService.success('Login successful', true);
                        this.router.navigate(['/chat']);
                    }

                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });

    }
}
