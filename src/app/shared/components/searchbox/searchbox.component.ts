import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent {

  @Output() 
  onValue = new EventEmitter<string>();

  emitValue(term : string){
    this.onValue.emit(term);
  }

  @Input()
  public placeholder : String = '';


}
