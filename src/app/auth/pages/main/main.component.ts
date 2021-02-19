import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  
  styles: [
    `
    * {
      box-sizing: border-box;
    }
    
    /* Create two equal columns that floats next to each other */
    .column {
      float: left;
      width: 50%;
      padding: 10px;
      height: 300px; /* Should be removed. Only for demonstration */
    }
    
    /* Clear floats after the columns */
    .row:after {
      content: "";
      display: table;
      
    
      * {
        box-sizing: border-box;
      }
      
      .header {
        border: 1px solid red;
        padding: 15px;
      }
      
      .row::after {
        content: "";
        clear: both;
        display: table;
      }
      
      [class*="col-"] {
        float: left;
        padding: 15px;
        border: 1px solid red;
      }
      
      .col-1 {width: 8.33%;}
      .col-2 {width: 16.66%;}
      .col-3 {width: 25%;}
      .col-4 {width: 33.33%;}
      .col-5 {width: 41.66%;}
      .col-6 {width: 50%;}
      .col-7 {width: 58.33%;}
      .col-8 {width: 66.66%;}
      .col-9 {width: 75%;}
      .col-10 {width: 83.33%;}
      .col-11 {width: 91.66%;}
      .col-12 {width: 100%;}


   
    `
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
