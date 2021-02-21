import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IItem } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/posts';

  get(startPosition: number, limit: number):Observable<IItem[]> {
    return this.http.get<IItem[]>(`${this.url}?_start=${startPosition}&_limit=${limit}`)
  }
}
