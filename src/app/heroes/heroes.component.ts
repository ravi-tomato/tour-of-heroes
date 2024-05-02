import { Component, Input } from '@angular/core';
import { Hero } from '../schemas/hero';
import { heroes } from '../heroes';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  title = 'Top Heroes';
  heroes: Hero[] = heroes;

  // constructor(private location: Location) {}
  constructor(private router: Router) {}

  onBack(): void {
    // this.location.back();
    this.router.navigateByUrl('/');
  }
}
