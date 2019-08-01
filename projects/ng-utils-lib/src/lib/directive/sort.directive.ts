import {Directive, EventEmitter, Input, Output} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
@Directive({
  selector: '[tableSort]'
})
export class SortDirective {
  @Input() predicate: string;
  @Input() ascending: boolean;
  @Input() callback: Function;
  @Output() predicateChange: EventEmitter<any> = new EventEmitter();
  @Output() ascendingChange: EventEmitter<any> = new EventEmitter();
  activeIconComponent: FaIconComponent;
  constructor() {}
  sort(field: any) {
    this.ascending = field !== this.predicate ? true : !this.ascending;
    this.predicate = field;
    this.predicateChange.emit(field);
    this.ascendingChange.emit(this.ascending);
    this.callback();
  }
}
