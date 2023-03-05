import { Component } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  items = [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house'
    },
    {
      number: '2',
      name: 'overview',
      icon: 'fa-solid fa-compass-drafting'
    }, 
    {
      number: '3',
      name: 'add task',
      icon: 'fa-solid fa-square-plus'
    }
  ]

}
