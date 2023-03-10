import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../product-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
