import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import {  Observable, of, switchMap } from "rxjs";
// import { SearchRequest } from "../../shared/models/model";


@Injectable({
  providedIn: "root",
})
export class BaseService {
  protected http = inject(HttpClient);
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

  add<T>(next: string, data: T): Observable<T> {
    return this.http.post<T>(this.url + `${next}`, data);
  }
  update<T, U>(next: string, data: U): Observable<T> {
    return this.http.post<T>(this.url + `${next}`, data);
  }

  getById<T>(id: number | string, next: string) {
    return this.http.get<T>(this.url + `${next}/${id}`);
  }

  delete<T>(id: number, next: string): Observable<T> {
    return this.http.delete<T>(
      this.url + `${next}/` + `${id}`,
      this.httpOptions
    );
  }




    addItem<T>(item: T, url: string): Observable<T> {
      return this.http
        .post<T>(environment.apiUrl + url, item)
        .pipe(switchMap((response: T) => of(response)));
    }

  addItemWithProject(
    item: any,
    url: string,
    projectId?: number | string
  ): Observable<any> {
    let params = new HttpParams();
    if (projectId !== undefined) {
      params = params.set("projectId", projectId.toString());
    }
    return this.http
      .post(environment.apiUrl + url, item, { params })
      .pipe(switchMap((response: any) => of(response)));
  }
  updateItem<T = any>(item: T, id: number | string, url: string): Observable<T> {
    return this.http
      .put<T>(environment.apiUrl + url + "/" + id, item)
      .pipe(switchMap((response: T) => of(response)));
  }

    updateItemWithoutId<T = any>(item: T, url: string): Observable<T> {
      return this.http
        .put<T>(environment.apiUrl + url, item)
        .pipe(switchMap((response: T) => of(response)));
    }

    patchItem<T = any>(item: T, id: number | string, url: string): Observable<T> {
      return this.http
        .patch<T>(environment.apiUrl + url + "/" + id, item)
        .pipe(switchMap((response: T) => of(response)));
    }

  
        saveStoreFile(data: FormData): Observable<any> {
          return this.http.post<any>(environment.apiUrl + "filesMinio/upload", data).pipe(
            switchMap((response: any) => of(response))
          );
        }

    deactivate(id: number) {
    return this.http.patch<void>(`${environment.apiUrl}pharmacies/guards/${id}/deactivate`, {});
  }


list(
  url: string,
  page: number,
  size: number,
  search?: string,
  role?: string
): Observable<any[]> {
  let params = new HttpParams()
    .set("page", page.toString())
    .set("size", size.toString());

  if (search) {
    params = params.set("search", search);
  }
  if (role) {
    params = params.set("role", role);
  }

  return this.http.get<any[]>(`${this.url}${url}`, { params });
}

// search(url: string, search?: SearchRequest): Observable<any[]> {
//   return this.http.post<any[]>(`${this.url}${url}/search`,search);
// }

}



