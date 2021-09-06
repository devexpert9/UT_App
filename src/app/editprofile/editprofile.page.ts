import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  profiletab: string = "basic";
  isAndroid: boolean = false;
   customAlertOptions: any = {
    header: 'Gender',
    translucent: true
  };
   customAlertOptions1: any = {
    header: 'Weight',
    translucent: true
  };
   customAlertOptions2: any = {
    header: 'Height',
    translucent: true
  };
   customAlertOptions3: any = {
    header: 'Activity Level',
    translucent: true
  };
   customAlertOptions4: any = {
    header: 'Hobbies',
    translucent: true
  };
   gender = {
   form:null
   };  
   weight = {
   form:null
   }; 
   height = {
   form:null
   };
    activity = {
   form:null
   };
    hobbies = {
   form:null
   };
  constructor() { 
  this.gender.form = "male";
  this.weight.form = "kg";
  this.height.form = "inches";
  this.activity.form = "beginner";
  this.hobbies.form = "gym";
  }

  ngOnInit() {
  }


}
