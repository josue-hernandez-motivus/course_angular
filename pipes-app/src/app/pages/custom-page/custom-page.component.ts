import { Component, signal } from '@angular/core';
import { CanFlyPipe } from "../../pipes/can-fly.pipe";
import { ToggleCasePipe } from "../../pipes/toggle-case.pipe";
import { Hero } from '../../interfaces/hero.interfaces';
import { heroes } from '../../data/heroes.data';
import { HeroFilterPipe } from "../../pipes/hero-filter.pipe";
import { HeroSortByPipe } from "../../pipes/hero-sort-by.pipe";
import { HeroColorPipe } from "../../pipes/hero-color.pipe";
import { HeroCreatorPipe } from "../../pipes/hero-creator.pipe";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-custom-page',
  imports: [TitleCasePipe,CanFlyPipe, ToggleCasePipe, HeroFilterPipe, HeroSortByPipe, HeroColorPipe, HeroCreatorPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Josue Hernandez');

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');
}
