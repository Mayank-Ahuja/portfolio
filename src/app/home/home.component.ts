import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../shared/services/app-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public appData: AppDataService
  ) { }

  ngOnInit(): void {
  }

}
