import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { bounce, shake, shakeX, tada } from 'ng-animate';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  animations: [
    trigger("shake", [
      transition(":increment", useAnimation(shake, {
        params: { timing: 2, delay: 0 }
      }))
    ]), trigger("bounce", [
      transition(":increment", useAnimation(bounce, {
        params: { timing: 4, }
      }))
    ]),
    trigger("tada", [
      transition(":increment", useAnimation(tada, {
        params: { timing: 3, }
      }))
    ])

  ]
})
export class AppComponent {
  title = 'ngAnimations';

  rotate = false;


  premier = 0;
  deux = 0;
  trois = 0;
  constructor() {
  }

  rotates() {
    if (this.rotate == false) {
      this.rotate = true;
      setTimeout(() => { this.rotate = false; }, 2000)
    }
  }

  playanimation() {
    this.premier++;
    setTimeout(() => {
      this.deux++;
      setTimeout(() => {
        this.trois++;
      }, 3000);
    }, 2000);
  }

  playanimationEnboucle() {
    this.premier++;
    setTimeout(() => {
      this.deux++;
      setTimeout(() => {
        this.trois++;
        setTimeout(() => {
          this.playanimationEnboucle();
        }, 3000)
      }, 3000);
    }, 2000);
  }
}
