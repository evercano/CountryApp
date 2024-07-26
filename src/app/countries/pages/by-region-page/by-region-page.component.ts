import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'contries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor(private countriesService : CountriesService){}

  public countries : Country[] = [];

  public searchByRegion(term : string) : void{
      this.countriesService.searchRegion(term).subscribe(countries => {
        this.countries = countries;
      });
  }

}
