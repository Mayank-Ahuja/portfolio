import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from 'src/app/shared/page-header/page-header.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(
    private pageHeader: PageHeaderService
  ) { }

  ngOnInit(): void {
    this.pageHeader.setPageHeaderName('Resume');
  }

}
