import { Component, OnInit } from '@angular/core';
import { DatacarrierService } from './../core/datacarrier.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public datacarrierService: DatacarrierService) { 
    this.datacarrierService.setLandingPageStatus(false); // to remove landing page from view
  }

  ngOnInit() {
  }

}
