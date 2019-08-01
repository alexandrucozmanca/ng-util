import { NgModule } from '@angular/core';
import {ToastrModule} from 'ngx-toastr';
import {SortDirective} from './directive/sort.directive';
import {SortByDirective} from './directive/sort-by.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SortDirective,
    SortByDirective
  ],
  imports: [
    NgbModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-right'
      }
    )
  ],
  exports: [
    SortDirective,
    SortByDirective
  ]
})
export class NgUtilsModule { }
