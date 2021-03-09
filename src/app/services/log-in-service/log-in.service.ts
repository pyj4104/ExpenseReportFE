import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class LogInService {
	responseCode? = null;

	constructor(private http: HttpClient) { }

	requestLogIn(userEmail: string): Observable<any> {
		const headers = { 'Content-Type': 'application/json'};
		const data = {'email': userEmail};
		return this.http.post<any>(
			"http://localhost:6543/api/logIn", data, {'headers':headers, observe: 'response'}
		).pipe(
			map(this.success),
			catchError(this.handleError)
		);
	}

	private success(res: HttpResponse<any>) {
		return res.status;
	}

	private handleError(error: HttpErrorResponse) {
		return of(error.status);
	}
}
