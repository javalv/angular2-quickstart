import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing,
    appRoutingProviders } from './app.routing';
import {FormsModule} from "@angular/forms";
import {MyHomePageComponent} from "./app.home";
import {HeroesModule} from "./heros/heroes.module";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HeroesModule
    ],
    declarations: [
        AppComponent,
        // MyListPageComponent,
        MyHomePageComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }