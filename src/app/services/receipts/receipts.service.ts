import { catchError, map } from 'rxjs/operators';
import { ResponseCodeHandler } from '@helpers/response-code-handler/response-code-handler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ReceiptsService {
	constructor(private http: HttpClient) {}

	submitReceipts(fID: number, receipts: File[]): Observable<any> {
		const fd = new FormData();
		fd.append('formID', String(fID));
		for (let i = 0; i < receipts.length; i++) {
			fd.append('file', receipts[i], receipts[i].name);
		}
		return this.http
			.post('api/receipts', fd)
			.pipe(
				map(ResponseCodeHandler.handleSuccess),
				catchError(ResponseCodeHandler.handleError)
			);
	}
}
