import { Component, OnInit } from '@angular/core';
import { CarouselCard } from '../carousel/carousel.interfaces';
import homePageCarousel from '../../../assets/home-page-carousel/homePageCarousel.json'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  public carouselCards: CarouselCard[] = homePageCarousel;
  public cards: CarouselCard[] = [
    {
      title: 'Cedar Post Main Logo',
      imagePath: '../../assets/cedarPostLogo.jpeg',
      alt: 'the cedar post logo'
    },
    {
      title: 'Tomato',
      imagePath: '../../assets/tomatoGeneric.jpeg',
      alt: 'fresh tomato'
    },
    {
      title: 'Corn',
      imagePath: '../../assets/cornGeneric.jpg',
      alt: 'fresh corn on the cob'
    },
    {
      title: 'Green Beans',
      imagePath: '../../assets/beansGeneric.jpeg',
      alt: 'fresh green beans'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
    console.log(homePageCarousel)
  }

}
