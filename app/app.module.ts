import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing,
    appRoutingProviders } from './app.routing';
import {FormsModule} from "@angular/forms";
import {MyHomePageComponent} from "./app.home";
import {HeroesModule} from "./heros/heroes.module";
import {MissionControlComponent} from "./serviceSubjectNotice/subject.controller";
import {AstronautComponent} from "./serviceSubjectNotice/subject.component";
import {MyOutputComponent} from "./app.outputtest";
import {MyEs6TestComponent} from "./es6/app.es6";
import {VoterComponent} from "./common/com.output";
// import {LoadingShade} from "./common/com.loading";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HeroesModule
    ],
    declarations: [
        AppComponent,
        MyHomePageComponent,
        MissionControlComponent,
        AstronautComponent,
        MyOutputComponent,
        MyEs6TestComponent,
        VoterComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }