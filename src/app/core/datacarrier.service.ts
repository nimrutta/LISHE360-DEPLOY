import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class DatacarrierService {

  constructor() { console.log('datacarrier is created') }

  private data: any;

  public isLandingpagestatus = new Subject<boolean>();

  setLandingPageStatus$ = this.isLandingpagestatus.asObservable();

  setData(data:any){
        this.data = data;
        console.log('1. service data after set ' + this.data)
    }
  
  getData():any{
        console.log('2. service data before get ' + this.data)
        return this.data;
    }

  setLandingPageStatus(status: boolean) {
        this.isLandingpagestatus.next(status);
  }

}
