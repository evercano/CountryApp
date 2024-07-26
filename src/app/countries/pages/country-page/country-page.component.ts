import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'contries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor( 
    private activateRoute : ActivatedRoute,
    private router : Router,
    private countriesServices : CountriesService,
   ){}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap (({id}) => this.countriesServices.searchContryByAlphaCode(id))
    )
    .subscribe( (country) => {
        if(!country) return this.router.navigateByUrl('');
        return this.country = country;        
    });
  }
}
