import { BeerService } from './beer.service';
import { Component, OnInit } from '@angular/core';
import { Beer } from './model/beer';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'beermanagerapp';
  beers!: Beer[];
  editBeer!: Beer | null;
  deleteBeer!: Beer | null;
  isSearchInputVisible: boolean = false;
  searchQuery: string = '';

  toggleSearchInput() {
    this.isSearchInputVisible = !this.isSearchInputVisible;
    if (this.isSearchInputVisible) {
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
          searchInput.focus();
        }
      });
    }
  }

  constructor(private BeerService: BeerService) {}

  ngOnInit(): void {
    this.getBeers();
  }

  public searchBeer(query: string): void {
    const resultArr: Beer[] = [];
    for (const beer of this.beers) {
      if (
        beer.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        beer.category.toLowerCase().indexOf(query.toLowerCase()) !== -1
      ) {
        resultArr.push(beer);
      }
    }
    this.beers = resultArr;
    if (resultArr.length === 0 || !query) {
      setTimeout(() => this.getBeers(), 1000);
    }
  }

  public getBeers(): void {
    this.BeerService.getBeers().subscribe(
      (response: Beer[]) => {
        this.beers = response;
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }

  public onAddBeer(addForm: NgForm): void {
    document.getElementById('add-beer-form')?.click();
    this.BeerService.addBeer(addForm.value).subscribe(
      (resp: Beer) => {
        this.getBeers();
        addForm.reset();
      },
      (err: Error) => {
        alert(err.message);
      }
    );
  }

  public onEditBeer(beer: Beer): void {
    this.BeerService.updateBeer(beer).subscribe(
      (resp: Beer) => {
        this.getBeers();
      },
      (err: Error) => {
        alert(err.message);
      }
    );
  }

  public onDeleteBeer(beerId: number | undefined): void {
    if (beerId === undefined) alert('Unproper beer Id!');
    else
      this.BeerService.deleteBeer(beerId).subscribe(
        (resp: void) => {
          this.getBeers();
        },
        (err: Error) => {
          alert(err.message);
        }
      );
  }

  public onOpenModal(beer: Beer | null, mode: string): void {
    const modalId =
      mode === 'add'
        ? 'addBeerModal'
        : mode === 'edit'
        ? 'editBeerModal'
        : 'deleteBeerModal';

    const modalEl = document.getElementById(modalId);
    if (mode === 'edit') {
      this.editBeer = beer;
    } else if (mode === 'delete') {
      this.deleteBeer = beer;
    }
    if (modalEl) {
      const btn = document.createElement('button');
      btn.style.display = 'none';
      btn.type = 'button';
      btn.setAttribute('data-bs-toggle', 'modal');
      btn.setAttribute('data-bs-target', `#${modalId}`);
      modalEl.appendChild(btn);
      btn.click();
    }
  }
}
