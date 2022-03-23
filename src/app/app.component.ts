import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  // onMouseMove(e) {
  //   // this.createBubble(e.clientY, e.clientX);
  // }

  // randomNumberGenerator = max => Math.floor(Math.random() * max)

  // createBubble(top = 0, left = 0, maxPadding = 10, minPadding = 2, r = 255, g = 255, b = 255){

  //   const padding = this.randomNumberGenerator(maxPadding);
  //   const div = document.createElement('div');

  //   div.style.padding = `${padding >= minPadding ? padding : minPadding}px`;
  //   div.style.background = `rgb(${this.randomNumberGenerator(r)}, ${this.randomNumberGenerator(g)}, ${this.randomNumberGenerator(b)})`;
  //   div.classList.add('circle');

  //   div.style.top = `${top}px`;
  //   div.style.left = `${left}px`;

  //   // console.log(div.);
  //   console.log(top, left);
  //   document.getElementById('main').appendChild(div);
  // }

  pointer;
  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent) {
    this.pointer = document.getElementsByClassName('pointer');
    for (let element of this.pointer) {
      element.style['left'] = $event.pageX.toString() + 'px';
      element.style['top'] = $event.pageY.toString() + 'px';
    }
  }

}
