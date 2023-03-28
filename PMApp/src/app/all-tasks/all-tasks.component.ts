import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit{

  constructor(public translate: TranslateService,
              private service: CustomerService){}

  language:any = localStorage.getItem('language');
  tasks: any;
  async ngOnInit(){
    await this.service.getTasks();
    this.translate.use(this.language);
    this.tasks = this.service.tasks;
    console.log(this.tasks);
  }
}
