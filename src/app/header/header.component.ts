import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  secondesObsSub: Subscription = new Subscription;
  secondes : number | undefined;

  constructor() { }



  ngOnInit(): void {
    const salutation = new Observable((observer)=>{
      observer.next("hello");
      observer.next("world");
      observer.complete();
    });

    const secondesObs= interval(1000);


   this.secondesObsSub = secondesObs.subscribe(
                                                (value) =>{
                                                  this.secondes=value;
                                                 }
);
  }
  ngOnDestroy(): void {
    this.secondesObsSub.unsubscribe;

  }

}
