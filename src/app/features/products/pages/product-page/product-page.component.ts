import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../core/service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  agregarProducto(product: Product): void {
    this.productService.addProduct(product);
    this.products = this.productService.getProducts();
  }

  eliminarProducto(id: number): void {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }
}