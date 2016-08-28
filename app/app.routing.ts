import { Routes, RouterModule } from '@angular/router';
import {MyHomePageComponent} from "./app.home";
import {MissionControlComponent} from "./serviceSubjectNotice/subject.controller";

const appRoutes: Routes = [
    { path: 'home', component: MyHomePageComponent },
    { path: 'subject', component: MissionControlComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);