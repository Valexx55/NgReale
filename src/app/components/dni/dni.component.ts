  import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

  @Component({
    selector: 'app-dni',
    imports: [],
    templateUrl: './dni.component.html',
    styleUrl: './dni.component.css'
  })
  export class DniComponent implements OnInit, OnDestroy, AfterViewInit {
    
    constructor () {
      console.log('En Constructor DniComponent')
    }
    
    ngAfterViewInit(): void {
    console.log('On AfterViewInit DniComponent');
    }

    ngOnInit(): void {
      console.log('On Init DniComponent');
    }


    ngOnDestroy(): void {
      console.log('On Destroy DniComponent')
    }
  }
