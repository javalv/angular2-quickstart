import { Routes, RouterModule } from '@angular/router';
import {MyHomePageComponent} from "./app.home";
import {MissionControlComponent} from "./serviceSubjectNotice/subject.controller";
import {MyOutputComponent} from "./app.outputtest";
import {MyEs6TestComponent} from "./es6/app.es6";

const appRoutes: Routes = [
    { path: '', pathMatch:'full', redirectTo: '/es6' },
    { path: 'home', component: MyHomePageComponent },
    { path: 'subject', component: MissionControlComponent},
    { path: 'output', component: MyOutputComponent},
    { path: 'es6', component:MyEs6TestComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);