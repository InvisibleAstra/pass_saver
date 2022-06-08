import {Component} from "@angular/core";
import { Router } from "@angular/router";


@Component({
  templateUrl: 'authWindow.component.html',
  styleUrls:['authWindow.component.scss'],
  selector: 'app-authWindow',
})
export class AuthWindowComponent {
  login:string = '';
  password:string = '';

  constructor(private router: Router) {
  }
  async logIn() {
    if(this.login === '1' && this.password === '1'){
    await this.router.navigate(['/main_area']);
    }
  }
}
