import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { response } from "express";
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  concat,
  from,
  fromEvent,
  interval,
  noop,
  of,
} from "rxjs";
import { createHttpObservable } from "../common/util";
import { error } from "console";
import { map, take, takeUntil, takeWhile } from "rxjs/operators";
import { unsub } from "../common/unsub";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent extends unsub implements OnInit { 
  courses: any;
  numbers$ = of(1, 2, 3);
  data$ = interval(1000);
  //dataSubscription: Subscription | undefined;
 // unsubscribe$ = new Subject<void>();
  //@ViewChild("btnSave") btnSave;
  ngOnInit() {
    this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe((data)=> console.log('data', data));
  }

  // ngOnDestroy(): void {
  //   //this.dataSubscription?.unsubscribe();
  //   this.unsubscribe$?.next();
  //   this.unsubscribe$?.complete();
  // }

}
