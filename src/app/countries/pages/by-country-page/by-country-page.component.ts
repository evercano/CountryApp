import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'contries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  constructor( private countriesService : CountriesService ){}

  public countries : Country [] = [];

  public searchByCountry( term : string ) : void {
      this.countriesService.searchCountry(term).subscribe( countries => {
        this.countries = countries;
      });
  }

}
