import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from '../shared/components/star/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../product-detail/product-detail.guard';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
  ],
})
export class ProductModule {}
