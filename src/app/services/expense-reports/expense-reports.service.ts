import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
	HttpClient,
	HttpErrorResponse,
	HttpResponse,
} from '@angular/common/http';
import { ResponseCodeHandler } from '@helpers/response-code-handler/response-code-handler';
import { Ministry } from '@interfaces/ministry';
import { ExpenseReport } from '@interfaces/expense-report';

@Injectable({
	providedIn: 'root',
})
export class ExpenseReportsService {
	constructor(private http: HttpClient) {}

	submitReport(data: ExpenseReport): Observable<any> {
		const headers = { 'Content-Type': 'application/json' };
		return this.http
			.post<any>('/api/expenseReport', data, {
				headers: headers,
				observe: 'response',
			})
			.pipe(
				map((res: HttpResponse<any>) => {
					return [true, res];
				}),
				catchError(ResponseCodeHandler.handleErrorComplex)
			);
	}

	getMinistries(): Observable<Ministry[]> {
		return this.http.get<Ministry[]>('/api/ministries');
	}
}
