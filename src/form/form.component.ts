import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Madhavan',
  };

  constructor() {}

  ngOnInit(): void {}
}
