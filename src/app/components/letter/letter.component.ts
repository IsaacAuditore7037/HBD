import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {
  constructor(
    public _Router: Router,
  ) {}


  ngOnInit(): void {

  }

  gift(){
    let path = `/letter/gift`;
    this._Router.navigate([path]);
  }
}
