import { Routes, RouterModule } from '@angular/router';
import {MyHomePageComponent} from "./app.home";

const appRoutes: Routes = [
    { path: 'home', component: MyHomePageComponent },
    // {
    //     path: 'heroes',
    //     component: MyListPageComponent,
    //     data: {
    //         title: 'Heroes List'
    //     }
    // },
    // { path: 'hero/:id', component: MyDetailComponent },
    // { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);