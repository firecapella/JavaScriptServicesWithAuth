import { Story } from './models/Story';
import { ApiMethods } from './other/ApiMethods';
import { AccountService } from './account.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class StoriesService extends ApiMethods {

    constructor(private http: Http, accountService: AccountService) {
        super(accountService);
     }

    getAll(): Observable<Story[]> {
        return this.http.get('/api/StoriesFromDb', {
            headers: this.getHeaders()
        }).map(this.extractData);
    }

    addNew(data: Story): Observable<any> {
        let body = JSON.stringify(data);
        return this.http.post('/api/StoriesFromDb', body, {
            headers: this.getHeaders()
        }).catch(this.handleError);
    }

    update(data: Story): Observable<any> {
        let body = JSON.stringify(data);
        return this.http.put('/api/StoriesFromDb', body, {
            headers: this.getHeaders()
        }).catch(this.handleError);
    }

    delete(id: number): Observable<any> {
        return this.http.delete('/api/StoriesFromDb?id='+id, {
            headers: this.getHeaders()
        }).catch(this.handleError);
    }
}