import { CarouselCard } from './carousel.interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut, scaleIn, scaleOut } from './carousel.animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    // trigger("slideAnimation", [
    //   /* scale */
    //   transition("void => *", [useAnimation(scaleIn, {params: { time: '1500ms' }} )]),
    //   transition("* => void", [useAnimation(scaleOut, {params: { time: '1500ms' }})]),
    // ])
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1000ms'} }) ]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1000ms'} }) ]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() cards: CarouselCard[] = [];
  @Input() allowHoverScale: boolean = false;
  public currentCard = 0;
  public intervalTimer: any; 

  constructor() { }

  public ngOnInit(): void {
    this.preloadImages(); // move to onchanges if you expect a change
    this.intervalTimer =   setInterval( () => {
      this.onNextClick();
    }, 4000)
  }

  public restartIntervalTimer(): void {
    clearInterval(this.intervalTimer)
    this.intervalTimer =   setInterval( () => {
      this.onNextClick();
    }, 4000) 
  }
  

  public onPreviousClick(): void {
    const previous = this.currentCard - 1;
    this.currentCard = previous < 0 ? this.cards.length - 1 : previous;
    this.restartIntervalTimer();
    // console.log("previous clicked, new current slide is: ", this.currentCard);
  }

  public onNextClick(): void {
    const next = this.currentCard + 1;
    this.currentCard = next === this.cards.length ? 0 : next;
    this.restartIntervalTimer();
    // console.log("next clicked, new current slide is: ", this.currentCard);
  }

  preloadImages() {
    for (const card of this.cards) {
      new Image().src = card.imagePath;
    }
  }
  
}

