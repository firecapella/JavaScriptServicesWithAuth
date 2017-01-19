import { Observable } from 'rxjs/Observable';
import { StoriesAuthService } from './../../shared/storiesAuth.service';
import { Story } from './../../shared/models/Story';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'storiesAuth',
    template: require('./storiesAuth.component.html')
})
export class StoriesAuthComponent implements OnInit {
    public stories: Story[];
    private errorMessage : string;

    constructor(private http: Http, private storiesAuthService: StoriesAuthService) {
        this.refreshData();
    }

    ngOnInit() { }

    refreshData() {
        this.storiesAuthService.getAll().subscribe(result => {
            this.stories = result;
            console.log(result);
        });
    }

    addNewData(newContent: string) {
        this.storiesAuthService.addNew(<Story>{ content: newContent }).subscribe(result => {
            console.log(result);
            this.refreshData();
        });
    }

    delete(id: number) {
        this.storiesAuthService.delete(id).subscribe(result => {
            console.log(result);
            this.refreshData();
        });
    }
}