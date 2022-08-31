import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from './page-header.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  constructor(private pageHeader: PageHeaderService) { }

  pageHeading: string = '';

  ngOnInit(): void {
    this.pageHeader.headerName.subscribe(page=>{
      this.pageHeading = page;
    })
  }

}
