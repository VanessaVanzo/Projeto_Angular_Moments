import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import {environment} from 'src/environments/environment'
import {Coment} from '../coment'
import {Response} from '../response'

@Injectable({
  providedIn: 'root'
})
export class ComentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/api/moments/`

  constructor(private http: HttpClient) { }

  createComent(data: Coment): Observable<Response<Coment>> {
    const id = data.momentId
    const url = `${this.apiUrl}${id}/comments`
    return this.http.post<Response<Coment>>(url,data)
  }
}
