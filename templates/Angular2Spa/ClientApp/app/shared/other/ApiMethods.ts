import { Observable } from 'rxjs/Observable';
import { AccountService } from './../account.service';
import { Response, Headers } from '@angular/http';
export class ApiMethods {

    constructor(private accountService: AccountService) {}

    protected extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    protected getHeaders() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer " + this.accountService.getToken());
        headers.append("Content-Type", "application/json");
        return headers;
    }

    protected handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}