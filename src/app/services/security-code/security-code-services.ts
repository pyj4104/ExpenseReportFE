import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseCodeHandler } from '@helpers/response-code-handler/response-code-handler';

@Injectable({
	providedIn: 'root',
})
export class SecurityCodeServices {
	constructor(private http: HttpClient) {}

	sendSecCode(secCode: string): Observable<any> {
		const headers = { 'Content-Type': 'application/json' };
		const data = { secCode: secCode };
		return this.http
			.post<any>('/api/secCheck', data, {
				headers: headers,
				observe: 'response',
			})
			.pipe(
				map(ResponseCodeHandler.handleSuccess),
				catchError(ResponseCodeHandler.handleError)
			);
	}
}
