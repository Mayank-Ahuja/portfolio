import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from 'src/app/shared/page-header/page-header.service';
import { AppDataService } from 'src/app/shared/services/app-data.service';
import { ComponentType } from 'src/shared/interfaces/component-type';
import { NAV_LINKS } from 'src/shared/services/navigation-links';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  componentInfo: ComponentType = NAV_LINKS[1]

  constructor(
    private pageHeader: PageHeaderService,
    public appData: AppDataService
  ) { }

  ngOnInit(): void {
    this.pageHeader.setPageHeaderName('About Me');
    this.appData.updateIntroContent();
  }

  

}
