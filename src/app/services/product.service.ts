import { ProductResponseModel } from './../modules/productResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="http://localhost:8080/api/products/getall"

  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl)
   }

}
