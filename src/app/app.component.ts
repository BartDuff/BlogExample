import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyByZbI1-TJ10bmN1qzQCxy6yWPENdW7fFw',
      authDomain: 'blogexample-20adb.firebaseapp.com',
      databaseURL: 'https://blogexample-20adb.firebaseio.com',
      projectId: 'blogexample-20adb',
      storageBucket: 'blogexample-20adb.appspot.com',
      messagingSenderId: '448438819882'
    };
    firebase.initializeApp(config);
  }
}
