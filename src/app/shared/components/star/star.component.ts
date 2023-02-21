import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'sfc-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  cropWidth = 75;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges() {
    this.cropWidth = (this.rating * 75) / 5;
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}
