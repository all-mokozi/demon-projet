import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'gestion-rv';
  letter: string = '';
  letter1: string = '';
  letter2: string = '';
  subscription1?: Subscription;
  subscription2?: Subscription;
  subscription3?: Subscription;
  helloObservable$: Observable<string>;

  constructor() {
    // console.log("app component created");
    this.helloObservable$ = new Observable<string>((subscriber: Subscriber<string>) => {
      const message = "Hello from Observable!";
      let index = 0;
      for (let i = 0; i < message.length; i++) {
        setTimeout(() => {
          subscriber.next(message[i]);

        }, (i + 1) * 1000);
      }
      setTimeout(() => {
        subscriber.complete();
      }, (message.length + 1) * 1000);


    });





  }
  ngOnInit(): void {
    const helloObserver1 = {


      next: (value: string) => {
        this.letter = value;
      },
      complete: () => {
        console.log("Observable completed");
      }
    };
    const helloObserver2 = {


      next: (value: string) => {
        this.letter1 = value;
      },
      complete: () => {
        console.log("Observable completed");
      }
    };

    this.subscription1 = this.helloObservable$.subscribe(helloObserver1);
    this.subscription2 = this.helloObservable$.subscribe(helloObserver2);
    this.subscription3 = this.helloObservable$.subscribe({
      next: (value: string) => {
        this.letter2 = value;
      },
      complete: () => {
        console.log("Observable completed");
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
    this.subscription3?.unsubscribe();
  }
};


