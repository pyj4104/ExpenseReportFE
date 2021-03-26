import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseCodeHandler } from '@helpers/response-code-handler/response-code-handler';

@Injectable({
	providedIn: 'root',
})
export class LogInService {
	constructor(private http: HttpClient) {}

	requestLogIn(userEmail: string): Observable<any> {
		const headers = { 'Content-Type': 'application/json' };
		const data = { email: userEmail };
		return this.http
			.post<any>('/api/logIn', data, {
				headers: headers,
				observe: 'response',
			})
			.pipe(
				map(ResponseCodeHandler.handleSuccess),
				catchError(ResponseCodeHandler.handleError)
			);
	}

	isLoggedIn(): Observable<any> {
		const headers = { 'Content-Type': 'application/json' };
		return this.http
			.get<any>('/api/logIn', {
				observe: 'response',
			})
			.pipe(
				map(ResponseCodeHandler.handleSuccess),
				catchError(ResponseCodeHandler.handleError)
			);
	}
}
