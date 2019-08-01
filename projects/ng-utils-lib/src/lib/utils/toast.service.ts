import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(protected toastrService: ToastrService) {
  }

  successUpdateMessage(entity: string) {
    this.toastrService.success(`${entity} updated successfully`, 'Update')
  }

  errorCreateFail(entity: string) {
    this.toastrService.error(`Cannot create ${entity}`, 'Create')
  }
  errorUpdateFail(entity: string) {
    this.toastrService.error(`Cannot update ${entity}`, 'Update')
  }

  successCreateMessage(entity: string) {
    this.toastrService.success(`${entity} created successfully`, 'Create')
  }
  deleteMessage(entity: string) {
    this.toastrService.error(`${entity} deleted successfully`, 'Delete')
  }

}
