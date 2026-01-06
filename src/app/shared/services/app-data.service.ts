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
  <p>I’m a Technical Assistant Project Manager with 8+ years of experience leading Agile teams and delivering 
  scalable digital platforms in the BFSI space. With a strong foundation in front-end engineering (Angular, 
  modern web architectures), I bridge the gap between business vision and technical execution.</p>
  <p>I’ve led cross-functional teams to deliver secure, high-impact solutions for large financial institutions, 
  driving measurable outcomes such as faster delivery cycles, reduced production defects, and improved 
  platform performance. My leadership style is hands-on and outcome-driven—I understand code, respect engineering 
  realities, and focus on clarity, accountability, and execution.</p>
  <p>I thrive in environments where strong technical leadership, stakeholder alignment, and disciplined 
  delivery come together to build reliable, user-centric products at scale.</p>`;

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
