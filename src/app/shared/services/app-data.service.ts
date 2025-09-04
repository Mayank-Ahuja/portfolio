import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  designation: string = 'Assistant Manager - Technology';
  introContent: string = `I am a dynamic and results-driven Front End Tech Lead with $yrs of experience 
  in web UI development, specialising in Angular frameworks within the BFSI domain. I possess expertise 
  in architecting scalable and high-performance user interfaces for mission-critical applications, 
  along with a strong ability to lead teams and mentor junior developers to deliver business-focused 
  digital solutions.`;

  updateIntroContent(): number {
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
    return workYears;
  }

}
