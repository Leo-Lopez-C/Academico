import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment as env } from '../../../../environments/environment';
import { endpoint } from 'src/app/shared/enpoints/enpoint';

@Injectable({
  providedIn: 'root'
})
export class CetiasService {
  constructor(private _http: HttpClient) {}

  getCitas(): Observable<any>{
    const requestUrl = `${env.api}${endpoint.LIST_CITAS}`;

    return this._http.get(requestUrl).pipe(
      map((resp:any)=>{
      return resp;
    }))
  }
}
