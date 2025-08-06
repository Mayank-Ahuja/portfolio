import { Component, OnInit } from '@angular/core';
import { NAV_LINKS } from 'src/shared/services/navigation-links';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navLinks = NAV_LINKS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
