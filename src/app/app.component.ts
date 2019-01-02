import { Component, Input } from '@angular/core';
import { DatacarrierService } from './core/datacarrier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatacarrierService]
})
export class AppComponent {

  constructor(public datacarrierService: DatacarrierService){
   
    datacarrierService.setLandingPageStatus$.subscribe(
      status => {
        this.isLandingpage = status;
      });

  }
  title = 'app works!';

  isLandingpage = true;

}
