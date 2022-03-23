import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    const options = {
      strings: ["Full Stack Developer.", "Student."],
      typeSpeed: 30,
      startDelay: 1200,
      backSpeed: 20,
      backDelay: 500,
      showCursor: true,
      cursorChar: '|',
      loop: true,
      // loopCount: 5,
    };

    const typed = new Typed('.typed', options);
  }

}
