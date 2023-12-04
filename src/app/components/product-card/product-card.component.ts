import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {

  constructor(){
  
  }
  ProductName: string = '';


  getProduct():void{
    console.log("getting Product fucntion")
    

    
  }

  ngOnInit(): void {

    this.ProductName = 'Bienvenido OnInit';
  }
}
