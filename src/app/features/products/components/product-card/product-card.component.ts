import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  eliminarProducto(): void {
    this.delete.emit(this.product.id);
  }
}