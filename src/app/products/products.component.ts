import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

const IMAGE_WIDTH = 50;
const IMAGE_MARGIN = 50;

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  showImage = true;
  pageTitle = 'Product List';
  imageWidth = IMAGE_WIDTH;
  imageMargin = IMAGE_MARGIN;

  products: IProduct[] = [];
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
  }

  get filteredProducts(): IProduct[] {
    return this.products.filter((p) =>
      p.productName
        .toLocaleLowerCase()
        .includes(this.listFilter.toLocaleLowerCase())
    );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List ' + message;
  }

  ngOnInit(): void {
    this.listFilter = '';
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
