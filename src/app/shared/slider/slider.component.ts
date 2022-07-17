import { Component, OnInit } from '@angular/core';
import { cards } from '../utils/cards';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  cards = cards;
  constructor() { }

  ngOnInit(): void {
  }

}
