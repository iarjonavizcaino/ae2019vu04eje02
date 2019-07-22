import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../productos.service";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products;
  formProduct;

  constructor(private apiproduct:ProductosService,
    private formBuilder:FormBuilder) { 
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
      this.createForm();
  }

  createForm(){
    this.formProduct = this.formBuilder.group({
      name:['',[Validators.required,
        Validators.minLength(4)]],
      description:['',[Validators.required,
        Validators.minLength(4)]],
      image:['',[Validators.required,
        Validators.minLength(4)]],
      price:[0,[Validators.required]]
    });
  }

  ngOnInit() {
  }

  guardarProducto(productToSave) {
    console.log(productToSave);
    this.apiproduct.addProduct(productToSave)
    .subscribe(
      (prod)=> {
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
        this.createForm();
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
