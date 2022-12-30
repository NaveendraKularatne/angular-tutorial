import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  show() {
    alert('Thank you for visiting us. Please send us a email on naveendrarashmika@gmail.com');
  }

  consoleCheck() {
    console.log('Hit');
  }
}
