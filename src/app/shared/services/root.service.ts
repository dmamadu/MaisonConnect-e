import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RootService {
  constructor(protected http: HttpClient) {}
  url: string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  };

  all<T>(next: string): Observable<T> {
    return this.http.get<T>(this.url + `${next}`);
  }

  add<T>(next: string, data: any): Observable<T> {
    return this.http.post<T>(this.url + `${next}`, data);
  }
  update<T, U>(next: string, data: U): Observable<T> {
    return this.http.post<T>(this.url + `${next}`, data);
  }

  getById<T>(id: number, next: string) {
    return this.http.get<T>(this.url + `${next}/${id}`);
  }

  delete<T>(id: number, next: string): Observable<T> {
    return this.http.delete<T>(
      this.url + `${next}/` + `${id}`,
      this.httpOptions
    );
  }


  getByCodePap<T>(url: string, codePap: string, offset: number = 0, max: number = 100): Observable<T> {
    const params = new HttpParams()
      .set('codePap', codePap)
      .set('offset', offset.toString())
      .set('max', max.toString());
    return this.http.get<T>(`${this.url}${url}/by-codePap`, { params });
  }

}
