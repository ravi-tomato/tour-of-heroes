import { Component, Input } from '@angular/core';
import { Hero } from '../schemas/hero';
import { heroes } from './heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  title = 'Top Heroes';
  hero: Hero = heroes[0];
  @Input() heroName: string = this.hero.name;
}
