import { HttpClient,
  HttpHeaders,
  HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  private setHeaders(): HttpHeaders {
    const headerConfig = {
      'X-Requested-With': 'XMLHttpRequest'
    };
    // if (this.jwtService.getToken()){
    //     headerConfig['Authorization'] = `Bearer ${this.jwtService.getToken()}`;
    // }

    return new HttpHeaders(headerConfig);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        // Client side error
        console.log('An error occurred:', error.error.message);
    } else {
        // Backend error code
        // Error body
        console.log(error.status);
        if (error.error['message']){
          console.log(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error['message']}`
          );
          return new ErrorObservable(error.error['message']);
        } else if (error.error['erro']) {
          console.log(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error['erro']}`
          );
          return new ErrorObservable(error.error['erro']);
        } else {
          console.log(
            'Backend returned code 404, ' +
            'body was: Not found',
            error
          );
          return new ErrorObservable("404");
        }
    }
  return new ErrorObservable(
    'Something bad happend: please try again later.');
}

get(path: string): Observable<any> {
  return this.http.get(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() })
      .pipe(catchError(this.handleError));
}

post(path: string, body: Object = {}): Observable<any> {
  return this.http.post(
      `${environment.api_url}${path}`,
      body,
      { headers: this.setHeaders() }
    )
    .pipe(catchError(this.handleError));
}
put(path: string, body: Object = {}): Observable<any>{
  return this.http.put(
      `${environment.api_url}${path}`,
      body,
      { headers: this.setHeaders() }
    )
    .pipe(catchError(this.handleError));
}

delete(path: string): Observable<any> {
  return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() }
    )
    .pipe(catchError(this.handleError));
}
}
