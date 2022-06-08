import {Routes} from "@angular/router";
import {PassAreaComponent} from "./components/passArea/passArea.component";
import {AuthWindowComponent} from "./components/authWindow/authWindow.component";

export const routes: Routes = [
  {path: 'main_area' , component: PassAreaComponent},
  {path: '', component: AuthWindowComponent}
]
