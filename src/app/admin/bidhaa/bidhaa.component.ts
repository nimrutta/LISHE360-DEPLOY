import { Component, OnInit } from '@angular/core';

import { BidhaaService } from '../../core/bidhaa.service';
import { Bidhaa } from '../../bidhaa';
import { BidhaaCategory } from '../../bidhaaCategory';
import { Order } from '../../order'

@Component({
  selector: 'app-bidhaa',
  templateUrl: './bidhaa.component.html',
  styleUrls: ['./bidhaa.component.css']
})
export class BidhaaComponent implements OnInit {
  

  bidhaa = new Bidhaa();
  bidhaacategory = new BidhaaCategory();
  productsCategories : BidhaaCategory[];
  orders:Order[];
  subscription: any;
  showEraser = {};
  
  constructor( private bidhaaService: BidhaaService) {

    this.productsCategories = [];
    this.orders = [];

    this.productsCategories = this.bidhaaService.bidhaaCategory;
    this.subscription = this.bidhaaService.fetchedbidhaaCategories.subscribe( (value) => {
      this.productsCategories = value;
      //this.productsCategories.unshift({name:"", id:null});
    });

    this.orders = this.bidhaaService.orders;
    this.subscription = this.bidhaaService.fetchedOrders.subscribe( (value) => {
      this.orders = value;
    });

   }

  ngOnInit() {

    this.getBidhaaCategories();
    this.getOrders();

  }


  // createMakalaCategory(){
  //   if (!this. bidhaacategory.category_name ) { return; } 
  //   this.bidhaaService.create(this.bidhaacategory)//test
  // }


  getOrders(){
    this.bidhaaService.getOrders()
  }

  getBidhaaCategories(): void {
    this.bidhaaService.getBidhaaCategory();//test
  }

  createProduct(){
    if (!this. bidhaa.name ) { return; }
    this.bidhaa.teacher_id = 1; 
    this.bidhaaService.create(this.bidhaa)//test
  }

  createProductCategory(){
    var that = this;
    if (!this.bidhaacategory.name) { return; } 
    this.bidhaaService.createCategory(this.bidhaacategory).then(response => that .reloadProductsCategories());
    //this.productsCategories.push(this.bidhaacategory);
    
  }


  reloadProductsCategories(){
    this.bidhaaService.getProductsCategories().then(category => this.productsCategories = category);
  }


  initializeImageId(event){
    this.bidhaa.image_id = event.id;
    console.log(event.id);
  }

  onInput($event) {
    $event.preventDefault();
    this.bidhaa.topic_category_id = $event.target.value;
  }

  display() {
    this.bidhaa.status = false;
  }

  donotdisplay() {
    this.bidhaa.status = true;
  }

  alterEditMode(i) {
    this.showEraser[i] = !this.showEraser[i];
    this.bidhaacategory.name = "";
  }

  sendUpdate(id, i) {

    this.showEraser[i] = !this.showEraser[i];
    if (!this.bidhaacategory.name) { return; }
    this.bidhaaService.updateProductCategory(this.bidhaacategory, id);
    this. productsCategories[i].name = this.bidhaacategory.name
    this.bidhaacategory.name = "";

  }

  deleteProductCategory(id, i) {
    this.productsCategories.splice(i, 1);
    this.bidhaaService.deleteCategory(id).subscribe(); 
  }


}
