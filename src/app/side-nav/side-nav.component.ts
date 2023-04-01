import { Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
  }

  
  // isChecked: boolean = false;

  
  switchLang(lang:string){
    localStorage.setItem('language',lang);
    location.reload();
  }


  items = [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
      path: ''
    },
    {
      number: '2',
      name: 'overview',
      icon: 'fa-solid fa-compass-drafting',
      path: 'boards'
    }
  ]



}
