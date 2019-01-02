import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';    //obtain absolute page path   ;never used

import { Makalatitles } from '../../makalatitles';
import { MakalatitlesService } from '../../core/makalatitles.service';

import { Blogpost } from '../../blogpost';
import { BlogpostService } from '../../core/blogpost.service';
import { PasseventsService } from '../../core/passevents.service';

@Component({
  selector: 'app-makala',
  templateUrl: './makala.component.html',
  styleUrls: ['./makala.component.css'],
 
})
export class MakalaComponent implements OnInit {

  article: Makalatitles[];
  _subscription: any;

   blogpost: Blogpost[];
   subscription: any;
   searchInputStatus = false;
   showmyId = false;
   thanksforjoiningprogram = false;

   public defaultSocialShareText = [];
   public socialShareUrl = [];

  constructor( private blogpostService: BlogpostService,
               private makalatitlesService:MakalatitlesService,
               private passeventsService: PasseventsService,
               private activatedRoute: ActivatedRoute,
               @Inject(DOCUMENT) document: any) {          //never used
     this.blogpost = blogpostService.blogpost;
     this.subscription = this.blogpostService.fetchedBlogpost.subscribe((value) => {
     this.blogpost = value;
   });

     this.article = makalatitlesService.article;
     this._subscription = this.makalatitlesService.fetchedArticle.subscribe((value) => {
     this.article = value;
     value.forEach( (item, index) => {        
      this.socialShareParameters(item, index);
     });


  })
    }

   ngOnInit() {

  this.getArticleViaRouter();
  this.removeSearchInput();
  }

   removeSearchInput() {
    this.passeventsService.exitblogsection(this.searchInputStatus);
}

   socialShareParameters(item,index){
     this.socialShareUrl[index] = document.location.href;
     this.defaultSocialShareText[index] = item.title ;
  }

   togglemyId() {
    this.showmyId = !this.showmyId;
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

   getArticleViaRouter() {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.makalatitlesService.getArticle(id);   
    }

}
