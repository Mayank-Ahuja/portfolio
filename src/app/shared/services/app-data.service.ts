import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  designation: string = 'Assistant Manager - Technology';
  introContent: string = `I have $yrs of industry experience as a web developer.
  I began my career as a UI developer and am currently based in Gurugram, working for a company in the BFSI domain.
  We help banks digitize their account opening and loan application processes, enabling faster and more efficient
  service delivery.`;

  updateIntroContent(): void {
    // updating the introContent dynamically
    let workYears = 0; //assuming a default value
    // Calculate the years of experience based on a start date
    let currentDate = new Date();
    let startDate = new Date('2016-10-01'); // Replace with actual start date of your career
    workYears = currentDate.getFullYear() - startDate.getFullYear();
    if (currentDate.getMonth() < startDate.getMonth() ||
        (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
      workYears--;
    }
    // Update the introContent with the calculated years of experience
    this.introContent = this.introContent.replace('$yrs', ` ${workYears} years`);
  }

}
