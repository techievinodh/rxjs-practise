import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { response } from "express";
import { Observable, fromEvent, interval } from "rxjs";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}
  //@ViewChild("btnSave") btnSave;
  ngOnInit() {
    const http$ = Observable.create((observer) => {
      fetch('/api/courses')
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          observer.next(body);
          observer.complete();
        })
        .catch((err) => observer.error(err));
    });

    http$.subscribe(courses => console.log(courses));
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
