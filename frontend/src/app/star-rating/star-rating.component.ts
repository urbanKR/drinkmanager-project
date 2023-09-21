import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
})
export class StarRatingComponent {
  @Input() beerRating!: number;
  stars: number[] = [1, 2, 3, 4, 5];
  emptyStars: number[] = [];
  hasHalfStar: boolean = false;
  halfStarValue: number = 0;

  ngOnInit() {
    this.halfStarValue = Math.floor(this.beerRating);
    this.hasHalfStar = this.beerRating - this.halfStarValue >= 0.5;
    this.emptyStars = Array(5 - Math.ceil(this.beerRating)).fill(0);
  }
}
