import { Definition } from './models/Definition';
import { ApiMethods } from './other/ApiMethods';
import { AccountService } from './account.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class DefinitionsService extends ApiMethods {

    constructor(private http: Http, accountService: AccountService) {
        super(accountService);
     }

    getAll(): Observable<Definition[]> {
        return this.http.get('/api/definitions', {
            headers: this.getHeaders()
        }).map(this.extractData);
    }

    getByID(id:number): Observable<Definition[]> {
        return this.http.get('/api/definitions/'+id, {
            headers: this.getHeaders()
        }).map(this.extractData);
    }

    getByWord(word:string): Observable<Definition[]> {
        return this.http.get('/api/definitions/'+word, {
            headers: this.getHeaders()
        }).map(this.extractData);
    }

    addNew(data: Definition): Observable<any> {
        let body = JSON.stringify(data);
        return this.http.post('/api/definitions', body, {
            headers: this.getHeaders()
        }).catch(this.handleError);
    }

    update(data: Definition): Observable<any> {
        let body = JSON.stringify(data);
        return this.http.put('/api/definitions', body, {
            headers: this.getHeaders()
        }).catch(this.handleError);
    }

    delete(id: number): Observable<any> {
        return this.http.delete('/api/definitions?id='+id, {
            headers: this.getHeaders()
        }).catch(this.handleError);
    }
}