import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { response } from "express";
import {
  BehaviorSubject,
  Observable,
  Subject,
  concat,
  from,
  fromEvent,
  interval,
  noop,
  of,
} from "rxjs";
import { createHttpObservable } from "../common/util";
import { error } from "console";
import { map } from "rxjs/operators";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}
  courses: any;
  numbers$ = of(1, 2, 3);
  //@ViewChild("btnSave") btnSave;
  ngOnInit() {
    // Create an observable sequence with values 1, 2, 3
    const source$ = of(1, 2, 3);

    // Create a new observable that emits the original values along with an additional value
    const modified$ = new Observable<number>((subscriber) => {
      source$.subscribe({
        next: (value) => subscriber.next(value), // Pass original values
        complete: () => {
          subscriber.next(4); // Add a new value
          subscriber.complete(); // Complete the sequence
        },
      });
    });
    // Subscribe to the modified observable to see the result
    modified$.subscribe((value) => console.log(value)); // Output: [1, 2, 3, 4]

    this.numbers$.subscribe({
      next: (value) =>
        console.log("Observable emitted the next value: " + value),
      error: (err) => console.error("Observable emitted an error: " + err),
      complete: () => {
        console.log("Observable emitted the complete notification");
      },
    });

    // this.numbers$.next(1);
    // this.numbers$.next(2);
    // this.numbers$.next(3);

    // this.numbers$.subscribe(
    //   next => console.log(`Number value is: ${next}`),
    //   error => console.error(error),
    //   () => console.log('completed'));

    //   this.numbers$.next(4)
    //   this.numbers$.subscribe(
    //     next => console.log(`Number value from second sub is: ${next}`),
    //     error => console.error(error));
    //   //() => console.log('second sub completed'));

    //   this.numbers$.next(5);

    //  const source1$ = of(1,2,3);
    //  const source2$ = of(4,5,6);
    //  const source3$ = of(6,7,8);

    //  const result$ = concat(source1$, source2$, source3$);
    //  result$.subscribe(console.log);
  }

  private simpleRxjsExample() {
    const interval$ = interval(1000);
    interval$.subscribe((val) => console.log("stream 1 => " + val));

    const click$ = fromEvent(document, "click");
    click$.subscribe((evt) => console.log(evt));

    // document.addEventListener('click', evt => {
    //   console.log(evt)
    //   let counter =0;
    //   setInterval(() => {console.log(counter); counter++}, 1000);
    //   setTimeout(()=> console.log("completed"), 3000)

    // });
  }
}
