import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { UrlComponent } from './url';
import { MessageComponent } from './message';
import { AuthGuard } from './_guards';
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'url', component: UrlComponent },
    { path: 'message', component: MessageComponent },
    { path: 'chat', component: ChatComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
