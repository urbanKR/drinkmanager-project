import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BeerService } from './beer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [AppComponent, StarRatingComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
