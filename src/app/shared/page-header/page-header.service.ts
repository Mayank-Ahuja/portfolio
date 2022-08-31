import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageHeaderService {

  constructor() { }

  pageHeaderName: Subject<string> = new Subject();
  headerName = this.pageHeaderName.asObservable();

  setPageHeaderName(pageName: string):void {
    this.pageHeaderName.next(pageName);
  }

}
