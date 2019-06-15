import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { AlertService, MessageService } from './_services';
import { UrlComponent } from './url';
import { MessageComponent } from './message';
import { DisplayMsgComponent } from './display-msg/display-msg.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing     
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        UrlComponent,
        MessageComponent
,
        DisplayMsgComponent    ],
    providers: [
        AuthGuard,
        AlertService,
        MessageService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }