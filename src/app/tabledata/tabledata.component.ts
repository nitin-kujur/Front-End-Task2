import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent implements OnInit {

  registerData = [];

  constructor(private dataService: DataService) { 
    this.dataService.registerData.map((data)=>{
      this.registerData.push(data);
    })
  }

  ngOnInit(): void {
  }

}
