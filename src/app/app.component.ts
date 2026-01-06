import { Component } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mayank Ahuja';

  firebaseConfig: any = {
    apiKey: "AIzaSyBIFG4kT-DIbOaBykRSRdXLCD6BC6YNM4I",
    authDomain: "mayank-ahuja-portfolio.firebaseapp.com",
    projectId: "mayank-ahuja-portfolio",
    storageBucket: "mayank-ahuja-portfolio.appspot.com",
    messagingSenderId: "215587502153",
    appId: "1:215587502153:web:8a65d5f68fba086608e798",
    measurementId: "G-2XYD3V7HT8"
  };

  constructor() {
    if(environment.production){
      const app = initializeApp(this.firebaseConfig);
      const analytics = getAnalytics(app);
      const perf = getPerformance(app);
    }
  }
}

