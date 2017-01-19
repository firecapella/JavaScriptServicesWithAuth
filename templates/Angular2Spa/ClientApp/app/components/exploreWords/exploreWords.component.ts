import { WordsService } from './../../shared/words.service';
import { Word } from './../../shared/models/Word';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'exploreWords',
    template: require('./exploreWords.component.html')
})
export class ExploreWordsComponent implements OnInit {
    public words: Word[];

    constructor(private http: Http, private wordsService: WordsService) {
        this.refreshData();
    }

    ngOnInit() { }

    refreshData() {
        this.wordsService.getAll().subscribe(result => {
            this.words = result;
            console.log(result);
        });
    }

    addNewData(newTitle: string) {
        var newWord = <Word>{
            title: newTitle
        };
        this.wordsService.addNew(<Word>{ title: newTitle }).subscribe(result => {
            console.log(result);
            this.refreshData();
        });
    }

    delete(id: number) {
        this.wordsService.delete(id).subscribe(result => {
            console.log(result);
            this.refreshData();
        });
    }
}