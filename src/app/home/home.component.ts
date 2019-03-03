import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../services/widgets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  status: any;
  incidents: any;
  component: any;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.getStatusData();
    this.getNumberOfIncidentsData();
    this.getComponentData();
  }

  getStatusData() {
    this.widgetsService.getData('status.json').subscribe(data =>{
      this.status = data;
      console.log(data);
    })
  }

  getComponentData() {
    this.widgetsService.getData('components.json').subscribe(data =>{
      this.component = data;
      console.log(data);
    })
  }

  getNumberOfIncidentsData() {
    this.widgetsService.getData('incidents.json').subscribe(data =>{
      this.incidents = data;
      console.log(data);
    })
  }
}

