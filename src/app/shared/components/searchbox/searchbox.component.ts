import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent implements OnInit, OnDestroy{
  
  
  private debouncer : Subject<string> =  new Subject<string>();
  private debouncerSuscription ?: Subscription ; 
  

  @Input()
  public initialValue : string = '';


  ngOnInit(): void {
    this.debouncerSuscription =  this.debouncer    
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
        this.onDebounce.emit(value);
    });  
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }


  @Output() 
  onValue = new EventEmitter<string>();

  @Output() 
  onDebounce = new EventEmitter<string>();

  emitValue(term : string){
    this.onValue.emit(term);
  }

  onKeyPress(searchTerm :  string){
    this.debouncer.next(searchTerm);
  }

  @Input()
  public placeholder : String = '';


}
