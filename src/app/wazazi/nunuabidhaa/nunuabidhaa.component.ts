import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { BidhaaService } from './../../core/bidhaa.service';
import { Order } from './../../order';

@Component({
  selector: 'app-nunuabidhaa',
  templateUrl: './nunuabidhaa.component.html',
  styleUrls: ['./nunuabidhaa.component.css']
})
export class NunuabidhaaComponent implements OnInit {

  constructor(private bidhaaService: BidhaaService) { }

  order = new Order();

  ngOnInit() {
  }

  @Input() ordertext: string;

  @Output() closeButtonClicked = new EventEmitter();

  @Output() myevenT = new EventEmitter();


  exitModal(button){
      this.closeButtonClicked.emit(button);
      console.log('exitmodal method')
 }

  closeModal(button){
    this.myevenT.emit(button);
 }

  placeAnOrder() {
     this.order.ordertext = this.ordertext;

     this.bidhaaService.createOrder(this.order) 
     .then(order => {   });
  }
}
