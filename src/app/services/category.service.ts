import { Category } from './../modules/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../modules/ListresponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="http://localhost:8080/api/categories/getall"

  constructor(private httpClient:HttpClient) { }
  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)
  }
}
