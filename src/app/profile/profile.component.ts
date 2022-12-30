import { Component } from '@angular/core';
import { FormControl} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  name = new FormControl();
  email = new FormControl();

  save() {
    alert(this.name.value);
  }
}
