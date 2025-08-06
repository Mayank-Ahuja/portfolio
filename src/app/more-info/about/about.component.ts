import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from 'src/app/shared/page-header/page-header.service';
import { AppDataService } from 'src/app/shared/services/app-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private pageHeader: PageHeaderService,
    public appData: AppDataService
  ) { }

  ngOnInit(): void {
    this.pageHeader.setPageHeaderName('About Me');
    this.appData.updateIntroContent();
  }

  

}
