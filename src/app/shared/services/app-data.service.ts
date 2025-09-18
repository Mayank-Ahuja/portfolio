import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  designation: string = 'Assistant Manager - Technology';
  subtitle: string = `Designing and developing visually appealing, responsive web interfaces that deliver 
  intuitive, seamless digital experiences for users.`;
  introContent: string = `
  <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend 
  thoughtful design with robust engineering. My favorite work lies at the intersection of design and 
  development, creating experiences that not only look great but are meticulously built for performance 
  and usability.</p>
  <p>Currently, I'm an Assistant Manager-Technology at <b class="company name">Decimal Technologies</b>, 
  specialising in Frontend development delivering secure, scalable solutions and optimized 
  workflows—ensuring compliance, accelerating delivery, and improving client outcomes.</p>`;

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
