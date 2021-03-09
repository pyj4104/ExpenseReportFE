import { of } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

export class ResponseCodeHandler {
	public static success(res: HttpResponse<any>) {
		return res.status;
	}

	public static handleError(error: HttpErrorResponse) {
		return of(error.status);
	}
}
