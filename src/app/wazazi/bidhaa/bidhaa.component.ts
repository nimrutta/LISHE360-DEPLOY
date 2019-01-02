import { Component, OnInit } from '@angular/core'; 
import { PlatformLocation } from '@angular/common'

import { BidhaaService } from '../../core/bidhaa.service';
import { PasseventsService } from '../../core/passevents.service';
import { DatacarrierService } from '../../core/datacarrier.service';
import { Bidhaa } from '../../bidhaa';
import { BidhaaCategory } from '../../bidhaaCategory';

@Component({
  selector: 'app-bidhaa',
  templateUrl: './bidhaa.component.html',
  styleUrls: ['./bidhaa.component.css']
})
export class BidhaaComponent implements OnInit {

  searchInputStatus = false;
  showMoreBidhaa = false;
  sortByCategory = false;

  constructor(private passeventsService: PasseventsService,
              private datacarrierService: DatacarrierService,
              private bidhaaService: BidhaaService,
              location: PlatformLocation,
             ) {
              // location.onPopState(() => {

              //   this.bidhaaService.notifyChildComponent();});
              }


  bidhaacategories : BidhaaCategory[];

  ngOnInit() {
    this.removeSearchInput();
    this.getBidhaaCategories();

  }


  showMoreBidhaafn() {
    this.showMoreBidhaa = !this.showMoreBidhaa;
  }

  removeSearchInput() {
    this.passeventsService.exitblogsection(this.searchInputStatus);
  }

  passPostId(id: number): void{
    this.datacarrierService.setData(id);
  }

  getBidhaaCategories() {
    this.bidhaaService.getCategories().then(category => this.bidhaacategories = category);
  }

  navigateToCategory(id) {
    this.bidhaaService.getBidhaaByCategory(id)
    this.sortByCategory = true;
  }

  loadAllProduct() {
    this.bidhaaService.getAllBidhaa();
  }

  allCategories() {
    this.sortByCategory = false;
  }
}
