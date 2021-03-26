import { of } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

export class ResponseCodeHandler {
	public static handleSuccess(res: HttpResponse<any>) {
		return res.status;
	}

	public static handleError(error: HttpErrorResponse) {
		return of(error.status);
	}

	public static handleSuccessComplex(res: HttpResponse<any>) {
		return [true, res.body];
	}

	public static handleErrorComplex(error: HttpErrorResponse) {
		return of([false, error.status]);
	}
}
