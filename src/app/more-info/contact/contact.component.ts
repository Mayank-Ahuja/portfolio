import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from 'src/app/shared/page-header/page-header.service';
import { ComponentType } from 'src/shared/interfaces/component-type';
import { NAV_LINKS } from 'src/shared/services/navigation-links';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  componentInfo: ComponentType = NAV_LINKS[5]

  constructor(
    private pageHeader: PageHeaderService
  ) { }

  ngOnInit(): void {
    this.pageHeader.setPageHeaderName('Contact');
  }

}
