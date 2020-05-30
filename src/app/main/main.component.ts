import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('navbar_sticky') navigation_element: ElementRef;
  
  sticky: boolean = false;
  navpos : any;

  
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    // this.navpos = this.navigation_element.nativeElement.offsetTop
  }

  @HostListener('window:scroll', ['$event'])
  scroll_bar(){
        const scroll = window.pageYOffset;
        if(scroll >= this.navpos){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }

}
