import {Component,ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {BaseComponent} from "../common/com.base";
@Component({
    template: `
    <h2>Heroes </h2>
    <router-outlet></router-outlet>
  `
})
export class HeroesPageComponent{

}