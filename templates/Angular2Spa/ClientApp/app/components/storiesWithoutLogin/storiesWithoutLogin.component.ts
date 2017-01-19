import { StoriesService } from './../../shared/services/stories.service';
import { Story } from './../../shared/models/Story';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'storiesWithoutLogin',
    template: require('./storiesWithoutLogin.component.html')
})
export class StoriesWithoutLoginComponent implements OnInit {
    public stories: Story[];

    constructor(private http: Http, private storiesService: StoriesService) {
        this.refreshData();
    }

    ngOnInit() { }

    refreshData() {
        this.storiesService.getAll().subscribe(result => {
            this.stories = result;
            console.log(result);
        });
    }

    addNewData(newContent: string) {
        this.storiesService.addNew(<Story>{ content: newContent }).subscribe(result => {
            console.log(result);
            this.refreshData();
        });
    }

    delete(id: number) {
        this.storiesService.delete(id).subscribe(result => {
            console.log(result);
            this.refreshData();
        });
    }
}