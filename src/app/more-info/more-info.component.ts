import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NAV_LINKS } from 'src/shared/services/navigation-links';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {

  navLinks = NAV_LINKS;

  constructor() { }

  ngOnInit(): void {}

}
