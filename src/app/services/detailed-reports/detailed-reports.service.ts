import { map, catchError } from 'rxjs/operators';
import { ResponseCodeHandler } from '@helpers/response-code-handler/response-code-handler';
import { DetailedReport } from '@interfaces/detailed-reports';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
	providedIn: 'root',
})
export class DetailedReportsService {
	constructor(private http: HttpClient, private datepipe: DatePipe) {}

	submitDetailedReports(data: DetailedReport[]): Observable<any> {
		const headers = { 'Content-Type': 'application/json' };
		for (let report of data) {
			console.log(report.date);
			report.date = this.datepipe.transform(report.date, 'yyyy-MM-dd');
		}
		const detailedReports = { DetailedReports: data };
		return this.http
			.post<any>('api/detailedReports', detailedReports, {
				headers: headers,
				observe: 'response',
			})
			.pipe(
				map(ResponseCodeHandler.handleSuccess),
				catchError(ResponseCodeHandler.handleError)
			);
	}
}
