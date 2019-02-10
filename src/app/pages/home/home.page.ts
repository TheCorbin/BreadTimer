import { Recipe, RecipeComponent } from './../../shared/models/recipe.model';
import { RecipeService } from './../../shared/services/recipe.service';
// import { HoursMinutesSeconds } from '../../pipes/hours-minutes-seconds.pipe';
import { Component } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentRecipe: Recipe;
  components: RecipeComponent[];
  totalSeconds = 0;
  initialTotalSeconds = 0;
  totalDuration = 0;
  selectedComponent;
  running = false;
  buttonText = 'START TIMER';

  constructor(public recipeService: RecipeService) {
    this.currentRecipe = recipeService.getRecipe();
    this.components = this.currentRecipe.components;
    this.totalSeconds = this.components.reduce((a, b) => a + b.duration, 0);
    this.initialTotalSeconds = this.totalSeconds;
  }

  async toggleTimer() {
    if (!this.selectedComponent) {
      this.selectedComponent = this.components[0];
    }

    let countDown;

    if (this.running === false) {
      this.running = true;
      this.buttonText = 'STOP TIMER';
      const source = interval(1000);

      countDown = source.subscribe(val => {
        this.selectedComponent.duration -= 1;
        this.totalSeconds -= 1;

        if (this.selectedComponent.duration === 0) {
          this.selectedComponent = this.components[this.selectedComponent.orderId + 1];
        }
      });
    } else {
      countDown.unsubscribe();
      this.running = false;
      this.buttonText = 'START TIMER';
    }
  }
}
