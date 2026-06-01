import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductsModule {}