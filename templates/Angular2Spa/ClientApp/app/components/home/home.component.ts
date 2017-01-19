import { LocalStorage } from './../../shared/other/localStorage';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    private number: string = "!";

    constructor( @Inject(LocalStorage) private localStorage) { }

    setData() {
        localStorage.setItem("test", localStorage.getItem("test") + "1");
        this.getData();
    }

    getData() {
        this.number = localStorage.getItem("test");
    }
}
