import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BidhaaService } from '../../core/bidhaa.service';
import { Bidhaa } from '../../bidhaa';

@Component({
  selector: 'app-bidhaa-category',
  templateUrl: './bidhaa-category.component.html',
  styleUrls: ['./bidhaa-category.component.css']
})
export class BidhaaCategoryComponent implements OnInit {

  deviceInfo = null;
  isNunuaBidhaaForm = false;
  orderText: String;      //pass name of item ordered to nunuabidhaa componet


  bidhaa: Bidhaa[];
  
  jinalabidhaa = ['Pacifier', 'Dishi la chakula cha mtoto','Aproni'];

  whatsapplink = []; /* an array of product names is 
                    created when componet is loaded */
 
  subscription: any;
  bidhaacategory_Id: number

  constructor( private bidhaaService: BidhaaService,
               private route: ActivatedRoute,
               ) {
     this.whatsapplink = [];
     this.bidhaa = bidhaaService.bidhaa;
     this.subscription = this.bidhaaService.fetchedBidhaa.subscribe((value) => {

     this.bidhaa = value;
     value.forEach( (item, index) => {        //create an array of products names
      this.order(item, index);
     });
  
      });


    // this.subscription = this.bidhaaService.notification.subscribe((value) => {
    //  this.getBidhaaviaRouter();
    // })
   }


   ngOnInit() {
    //this.getBidhaa();
     this.getBidhaaviaRouter();
  }


   order(value,index){
     this.whatsapplink[index] = "https://api.whatsapp.com/send?phone=255688192446&text=Nahitaji%20" + value.name;
  }


  showNunuaBidhaaForm(i) {
    this.orderText = 'Nahitaji ' + this.bidhaa[i].name; 
    this.isNunuaBidhaaForm = true; 
  }


  closeButtonClicked($event){
    if(this.isNunuaBidhaaForm) {
       this.isNunuaBidhaaForm = false;
    }

    console.log('closebuttonclicked method');
    console.log(this.isNunuaBidhaaForm);
  }

  myevenT($event){
    if(this.isNunuaBidhaaForm) {
       this.isNunuaBidhaaForm = false;
    }
  }

  getBidhaaviaRouter() {
    this.bidhaacategory_Id = +this.route.snapshot.paramMap.get('id');
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      console.log('id is ZERO');
      this.bidhaaService.getAllBidhaa();
    }
    else {
      console.log('id NOT ZERO')
      this.bidhaaService.getBidhaa(id).then(bidhaa => {this.bidhaa = bidhaa;
        this.bidhaa.forEach( (item, index) => {        //create an array of products names
          this.order(item, index);
         });
        });
    }
    
  }


  getBidhaa() {
    this.bidhaaService.getProducts().then(bidhaa => {this.bidhaa = bidhaa; console.log( 'HERE ' + this.bidhaa);  });
    
  }


}
