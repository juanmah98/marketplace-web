import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('carouselElement', { static: true })
  carouselElement!: ElementRef; 
  constructor() { }
  activeItemIndex = 0;
  totalItems = 4;
  ngOnInit(): void {
  }

  prevSlide() {
    this.activeItemIndex = (this.activeItemIndex - 1 + this.totalItems) % this.totalItems;
    
  }

  nextSlide() {
    this.activeItemIndex = (this.activeItemIndex + 1) % this.totalItems;
    console.log("this.activeItemIndex")
    console.log(this.activeItemIndex)
  }

  activateCarouselItem(itemIndex: number) {
    this.activeItemIndex = itemIndex;
    const carouselItems = this.carouselElement.nativeElement.querySelectorAll('.carousel-item');
    carouselItems.forEach((item: HTMLElement, index: number) => {
      if (index === itemIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

}
