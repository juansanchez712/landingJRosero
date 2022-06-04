import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      image: "../../../assets/5C3 1.png",
      category: "First category",
      description: "Lorem ipsum dolor sit amet",
      alt: "Desk with yellow chair"
    },
    {
      image: "../../../assets/5C4 1.png",
      category: "Second category",
      description: "Lorem ipsum dolor sit amet",
      alt: "Desk with brown background"
    },
    {
      image: "../../../assets/5C4 1.1.png",
      category: "Third category",
      description: "Lorem ipsum dolor sit amet",
      alt: "Desk with red chairs" 
    },
    {
      image: "../../../assets/5C3 1.1.png",
      category: "Fourth category",
      description: "Lorem ipsum dolor sit amet",
      alt: "Beer monkey" 
    },
    {
      image: "../../../assets/5C4 1.1.png",
      category: "Third category",
      description: "Lorem ipsum dolor sit amet",
      alt: "Desk with red chairs" 
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
