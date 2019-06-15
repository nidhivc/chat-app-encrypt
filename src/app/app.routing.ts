import { Routes, RouterModule } from '@angular/router';
import { UrlComponent } from './url';
import { MessageComponent } from './message';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: MessageComponent, canActivate: [AuthGuard] },
    { path: 'url', component: UrlComponent },
    { path: 'message', component: MessageComponent },   

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
