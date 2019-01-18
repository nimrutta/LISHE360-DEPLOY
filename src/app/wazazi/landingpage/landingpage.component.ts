import { Component, OnInit } from '@angular/core';
import { DatacarrierService } from '../../core/datacarrier.service';
// import { PasseventsService } from '../../core/passevents.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  searchInputStatus = false;
  showmyId = false;
  thanksforjoiningprogram = false;

  constructor(public datacarrierService: DatacarrierService) {
    this.datacarrierService.setLandingPageStatus(false); // to remove landing page from view
   }

  ngOnInit() {
  //  this.removeSearchInput() 
  }

  // removeSearchInput() {
  //   this.passeventsService.exitblogsection(this.searchInputStatus);
  // }

  jiungenaDarasa() {
    this.showmyId = true;
  }

  myevenT($event){
    this.showmyId = !this.showmyId;
    this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
  }

  closeButtonClicked($event){
       this.showmyId = !this.showmyId;
    }

   closeModal($event){
    this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    }


}
