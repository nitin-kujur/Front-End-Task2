import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }
  fullImage = "../../assets/images/baner_image_full.jpg"
  squareImage = "../../assets/images/baner_image_square.jpg"
  ngOnInit(): void {
  }

}
