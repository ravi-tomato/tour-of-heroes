import { Router, RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { NgModule } from "@angular/core";
import { HeroDetailsComponent } from "./hero-details/hero-details.component";

export const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'hero-details',
    component: HeroDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}