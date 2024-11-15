import { Component, NgModule } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { environment } from './environments/environment';
import { NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HBD';


  ngOnInit(): void {
    initFlowbite();
  }

  // constructor(
  //   private _Title: Title
  // ){
  //   _Title.setTitle(environment.APP_NAME)
  // }

}
