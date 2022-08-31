import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  designation: string = 'Senior Web Developer';
  introContent: string = `I have about 6yrs of industry experience working as a web developer. 
  I started my journey as a UI developer and currently working in Gurgoan for the company providing 
  services in the BFSI domain. We help the banks digitizing their process for account opening and 
  loan applications in the least possible time.`

}
