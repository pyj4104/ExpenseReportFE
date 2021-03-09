import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
	HttpClient,
	HttpErrorResponse,
	HttpResponse,
} from '@angular/common/http';
import { ResponseCodeHandler } from '@helpers/response-code-handler/response-code-handler';

@Injectable({
	providedIn: 'root',
})
export class SecurityCodeServices {
	constructor(private http: HttpClient) {}

	sendSecCode(secCode: string): Observable<any> {
		const headers = { 'Content-Type': 'application/json' };
		const data = { 'secCode': secCode };
		return this.http
			.post<any>('http://localhost:6543/api/secCheck', data, {
				headers: headers,
				observe: 'response',
			})
			.pipe(
				map(ResponseCodeHandler.success),
				catchError(ResponseCodeHandler.handleError)
			);
	}
}
