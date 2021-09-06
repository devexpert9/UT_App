import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {

  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  status : boolean = false;
  msg1 : boolean = false;

  optionsRange: CalendarComponentOptions = {
    pickMode: 'multi',
    showMonthPicker: false
  };
  constructor() { }

  showMnth(){
    this.status = !this.status;
    this.msg1 = !this.msg1;
  }

  ngOnInit() {
  }

}
