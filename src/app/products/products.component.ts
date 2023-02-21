import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

const IMAGE_WIDTH = 50;
const IMAGE_MARGIN = 50;

@Component({
  selector: 'sfc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
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

  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
  ];

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List ' + message;
  }

  ngOnInit(): void {
    this.listFilter = '';
  }
}
