import { AccountService } from './../../shared/services/account.service';
import { Component } from '@angular/core';
import '../../../rxjs-operators';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})
export class AppComponent {
    constructor(private accountService: AccountService) { }
}
