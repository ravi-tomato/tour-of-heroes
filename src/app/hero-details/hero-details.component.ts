import { Component, Input } from '@angular/core';
import { Hero } from '../schemas/hero';
import { heroes } from '../heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent {
  @Input() hero: Hero = heroes[0];
  heroName: string = this.hero.name;

  constructor(private router: Router) {}
  
  onBack(): void {
    // this.location.back();
    this.router.navigateByUrl('/heroes');
  }
}
