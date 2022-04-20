import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isActive: boolean = true;

  data = [{ test: '25' }, { test: '12' }, { test: '2255' }];

  changeActiveTemplate() {
    this.isActive = !this.isActive;
  }

  addItem = () => {
    this.data.push({test: '4'});
  }
}


