import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  @Output() productCreated = new EventEmitter<Product>();

  nombre: string = '';
  precio: number = 0;

  crearProducto(): void {

    if (!this.nombre || this.precio <= 0) {
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      nombre: this.nombre,
      precio: this.precio
    };

    this.productCreated.emit(newProduct);

    this.nombre = '';
    this.precio = 0;
  }
}