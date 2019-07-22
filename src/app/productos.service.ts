import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  public getProducts(){
    return this.http.get("http://134.209.202.112/api/v1/products/");
  }

  getProductById(id){
    return this.http.get("http://134.209.202.112/api/v1/products/"+id);
  }

  addProduct(product) {
    return this.http.post("http://134.209.202.112/api/v1/products/",
                         product, httpOptions);
  }


}
