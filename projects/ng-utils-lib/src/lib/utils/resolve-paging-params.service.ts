import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResolvePagingParams implements Resolve<any> {
  constructor() {};

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
    const defaultSort = route.data['defaultSort'] ? route.data['defaultSort'] : 'id,asc';
    const sort = route.queryParams['sort'] ? route.queryParams['sort'] : defaultSort;
    return {
      page: this.parsePage(page),
      predicate: this.parsePredicate(sort),
      ascending: this.parseAscending(sort)
    };
  }

  parseAscending(sort: string) {
    let sortArray = sort.split(',');
    sortArray = sortArray.length > 1 ? sortArray : sort.split('%2C');
    if (sortArray.length > 1) {
      return sortArray.slice(-1)[0] === 'asc';
    }
    // default to true if no sort is defined
    return true;
  };
  parsePage(page: string) {
    return parseInt(page, 10);
  }
  parsePredicate(sort: string) {
    return sort.split(',')[0].split('%2C')[0];
  }
}
