import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-basic',
  standalone: true,
	imports: [NgbCarouselModule],
  templateUrl: './carousel-basic.component.html',
  styleUrl: './carousel-basic.component.css'
})
export class NgbdCarouselBasic {
	//images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ["./jpg/avon.jpg", "./jpg/faberlic.jpg", "./jpg/oriflame.jpg"];
}
