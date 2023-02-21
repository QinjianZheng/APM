import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

const IMAGE_WIDTH = 50;
const IMAGE_MARGIN = 50;

@Component({
  selector: 'sfc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  showImage = true;
  pageTitle = 'Product List';
  imageWidth = IMAGE_WIDTH;
  imageMargin = IMAGE_MARGIN;

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
  products: IProduct[] = [];

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List ' + message;
  }

  ngOnInit(): void {
    this.listFilter = '';
    this.products = this.productService.getProducts();
  }
}
