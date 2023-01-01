import { Component } from '@angular/core';

export interface Employee {
  id: string;
  name:  string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  employees: Employee[] = [
    {id: "1", name: "Naveendra", email: "naveendrarashmika@gmail.com", password:"123"},
    {id: "2", name: "Rashmika", email: "rashmika@gmail.com", password:"123"},
    {id: "3", name: "Kularatne", email: "kularatne@gmail.com", password:"123"}
  ];
}
