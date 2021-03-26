import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ResponseCodeHandler } from '@helpers/response-code-handler/response-code-handler';
import { Category } from '@interfaces/category';

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

	getCaegories(formID: number): Observable<Category[]> {
		const params = new HttpParams().set('formID', String(formID));
		return this.http.get<Category[]>('api/categories', { params });
	}
}
