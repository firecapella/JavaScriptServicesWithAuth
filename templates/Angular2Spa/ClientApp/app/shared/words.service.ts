import { ApiMethods } from './other/ApiMethods';
import { AccountService } from './account.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Word } from './models/Word';
import { Injectable } from '@angular/core';

@Injectable()
export class WordsService extends ApiMethods {

    constructor(private http: Http, accountService: AccountService) {
        super(accountService);
     }

    getAll(): Observable<Word[]> {
        return this.http.get('api/words', {
            headers: this.getHeaders()
        }).map(this.extractData);
    }

    addNew(word: Word): Observable<any> {
        let body = JSON.stringify(word);
        return this.http.post('api/words', body, {
            headers: this.getHeaders()
        }).catch(this.handleError);
    }

    update(word: Word): Observable<any> {
        let body = JSON.stringify(word);
        return this.http.put('api/words', body, {
            headers: this.getHeaders()
        }).catch(this.handleError);
    }

    delete(id: number): Observable<any> {
        return this.http.delete('api/words?id='+id, {
            headers: this.getHeaders()
        }).catch(this.handleError);
    }
}