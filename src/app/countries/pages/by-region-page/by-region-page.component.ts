import { Component, OnInit, Type } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'contries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  constructor(private countriesService : CountriesService){}

  public countries : Country[] = [];
  public isLoading : boolean = false;
  public regions : Region [] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion ?: Region;  

  ngOnInit(): void {
    this.countries    =  this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion =  this.countriesService.cacheStore.byRegion.region;
  }

  public searchByRegion(region : Region) : void{
    this.selectedRegion = region;
    this.isLoading = true;
      this.countriesService.searchRegion(region).subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
