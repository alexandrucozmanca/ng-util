import { AfterContentInit, ContentChild, Host, HostListener, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {faSort, faSortDown, faSortUp, IconDefinition} from '@fortawesome/free-solid-svg-icons';

import {SortDirective } from './sort.directive';
import {Directive} from "@angular/core";

@Directive({
  selector: '[sortBy]'
})
export class SortByDirective implements AfterContentInit {
  @Input() sortBy: string;
  @ContentChild(FaIconComponent, { static: true }) iconComponent: FaIconComponent;

  sortIcon = faSort;
  sortAscIcon = faSortUp;
  sortDescIcon = faSortDown;

  constructor(@Host() private sort: SortDirective) {
    this.sort = sort;
  }

  ngAfterContentInit(): void {
    if (this.sort.predicate && this.sort.predicate !== '_score' && this.sort.predicate === this.sortBy) {
      this.updateIconDefinition(this.iconComponent, this.sort.ascending ? this.sortDescIcon : this.sortAscIcon);
      this.sort.activeIconComponent = this.iconComponent;
    }
  }

  @HostListener('click')
  onClick() {
    if (this.sort.predicate && this.sort.predicate !== '_score') {
      this.sort.sort(this.sortBy);
      this.updateIconDefinition(this.sort.activeIconComponent, this.sortIcon);
      this.updateIconDefinition(this.iconComponent, this.sort.ascending ? this.sortDescIcon : this.sortAscIcon);
      this.sort.activeIconComponent = this.iconComponent;
    }
  }

  private updateIconDefinition(iconComponent: FaIconComponent, icon: IconDefinition) {
    if (iconComponent) {
      iconComponent.iconProp = icon;
      iconComponent.ngOnChanges({});
    }
  }
}
