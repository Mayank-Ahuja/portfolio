import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from 'src/app/shared/page-header/page-header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private pageHeader: PageHeaderService
  ) { }

  ngOnInit(): void {
    this.pageHeader.setPageHeaderName('Contact');
  }

}
