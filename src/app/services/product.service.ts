import { Product } from 'src/app/modules/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/ListresponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="http://localhost:8080/api/";

  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
   }

   getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+"products/getByCategoryId?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
   }

}
