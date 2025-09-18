import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../shared/services/app-data.service';
import { ComponentType } from 'src/shared/interfaces/component-type';
import { NAV_LINKS } from 'src/shared/services/navigation-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  componentInfo: ComponentType = NAV_LINKS[0]; // Home is the first link in NAV_LINKS

  constructor(
    public appData: AppDataService
  ) { }

  ngOnInit(): void {
    // this.appData.updateIntroContent();
  }

}
