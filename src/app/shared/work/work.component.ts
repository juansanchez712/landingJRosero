import { Component, OnInit } from '@angular/core';
import { cards } from '../utils/cards';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss' ]
})
export class WorkComponent implements OnInit {

  cards = cards;
  constructor() { }

  ngOnInit(): void {
    
  }

}
