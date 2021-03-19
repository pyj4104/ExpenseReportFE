import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
	HttpClient,
	HttpErrorResponse,
	HttpResponse,
} from '@angular/common/http';

import { ResponseCodeHandler } from '@helpers/response-code-handler/response-code-handler';
import { Categories, Category } from '@interfaces/category';

@Injectable({
	providedIn: 'root',
})
export class CategoriesService {
	constructor(private http: HttpClient) {}

	submitCategories(data: Category[]): Observable<any> {
		const headers = { 'Content-Type': 'application/json' };
		const categories = { Categories: data };
		return this.http
			.post<any>('api/categories', categories, {
				headers: headers,
				observe: 'response',
			})
			.pipe(
				map(ResponseCodeHandler.handleSuccessComplex),
				catchError(ResponseCodeHandler.handleError)
			);
	}
}
