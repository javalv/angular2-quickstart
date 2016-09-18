import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { heroesRouting } from './heroes.routing';
import {MyListPageComponent} from "./heroes.list";
import {MyDetailComponent} from "./heros.detail";
import {LoadingShade} from "../common/com.loading";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        heroesRouting
    ],
    declarations: [
        MyListPageComponent,
        MyDetailComponent,
        LoadingShade
    ],
    providers: [
        // HeroService
    ]
})
export class HeroesModule {}
