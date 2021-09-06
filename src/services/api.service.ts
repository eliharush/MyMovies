import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, timeout as setTimeout, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorsService } from '../services/utils/error.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, public errorService: ErrorsService) { }

  createPostService(url: string, ob: any) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.httpClient.post(url, ob).subscribe(data => {
          resolve(data);
        }, error => {
          this.errorService.errorHandelingHttp(error)
        });
      } catch (err) {
        this.errorService.errorHandelingHttp(err)
      }
    });
  }


  createGetService(url: string, headParams?: any) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.httpClient.get(url).subscribe(data => {
          resolve(data);
        }, error => {
          this.errorService.errorHandelingHttp(error)
        });
      } catch (err) {
        this.errorService.errorHandelingHttp(err)
      }
    });
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return throwError(errMsg);
  }
}
