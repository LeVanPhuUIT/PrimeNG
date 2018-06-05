import { Component, OnInit } from '@angular/core';
import { Message, MenuItem } from 'primeng/components/common/api';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  msgs: Message[] = [];
    
  items: MenuItem[];
  
  ngOnInit() {
      this.items = [
          {label: 'Update', icon: 'fa-refresh', command: () => {
              this.update();
          }},
          {label: 'Delete', icon: 'fa-close', command: () => {
              this.delete();
          }},
          {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
          {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
      ];
  }

  save() {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Success', detail:'Data Saved'});
  }
  
  update() {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Success', detail:'Data Updated'});
  }
  
  delete() {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Success', detail:'Data Deleted'});
  }

}
