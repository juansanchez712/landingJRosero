import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss' ]
})
export class WorkComponent implements OnInit {

  cards = [
    {
      image: "../../../assets/5C3 1.png",
      description: "Research into the latest trends in workspaces that help design, manufacture solutions and create inspiring spaces.",
      alt: "Desk with yellow chair"
    },
    {
      image: "../../../assets/5C4 1.2.png",
      description: "Performance, flexibility, cost-efficient and design are some of the benefits the access floor provides to architectural projects.",
      alt: "Desk with brown background"
    },
    {
      image: "../../../assets/5C4 1.1.png",
      description: "Combination of colors, design and textures for executive and operational areas.",
      alt: "Desk with red chairs" 
    },
    {
      image: "../../../assets/5C4 1.4.png",
      description: "This project shows the variety of configurations, furniture, finishes and interaction possibilities for work spaces.",
      alt: "Desk with red chairs" 
    },
    {
      image: "../../../assets/5C4 1.png",
      description: "Adaptation, reconstruction reconfiguration of spaces.",
      alt: "Desk with red chairs" 
    },
    {
      image: "../../../assets/5C3 1-1.png",
      description: "Exterior spaces",
      alt: "Desk with yellow chair"
    },
    {
      image: "../../../assets/5C9.png",
      description: "Visualization of unconventional environmental factors and nature.",
      alt: "Desk with yellow chair"
    },
    {
      image: "../../../assets/5C1.png",
      description: "Natural textures and construction material textures.",
      alt: "Desk with yellow chair"
    },
    {
      image: "../../../assets/5C3 1.1.png",
      description: "Textures and colors",
      alt: "Desk with red chairs" 
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
