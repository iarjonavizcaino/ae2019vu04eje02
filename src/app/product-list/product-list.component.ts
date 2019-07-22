import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../productos.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products;

  constructor(private apiproduct:ProductosService) { 
    this.apiproduct.getProducts().subscribe(
      (products_result)=>{
        this.products = products_result;
        console.log(this.products);
      },
      (err)=>{
        console.log(err);
        this.products = err;
      }
    );
  }

  ngOnInit() {
  }

}
