import { LocalStorage } from './shared/other/localStorage';
import { StoriesAuthService } from './shared/services/storiesAuth.service';
import { StoriesService } from './shared/services/stories.service';
import { AccountService } from './shared/services/account.service';
import { StoriesAuthComponent } from './components/storiesAuth/storiesAuth.component';
import { StoriesWithoutLoginComponent } from './components/storiesWithoutLogin/storiesWithoutLogin.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        StoriesWithoutLoginComponent,
        StoriesAuthComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'storiesWithoutLogin', component: StoriesWithoutLoginComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'storiesAuth', component: StoriesAuthComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AccountService,
        StoriesService,
        StoriesAuthService,
        { provide: LocalStorage, useValue: (isBrowser) ? window.localStorage : { getItem() { } } }
    ]
})
export class AppModule {
}
