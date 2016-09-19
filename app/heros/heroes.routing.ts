import {Routes, RouterModule} from '@angular/router';

import {MyListPageComponent}    from './heroes.list';
import {MyDetailComponent}  from './heros.detail';
import {HeroesPageComponent} from "./heroes";

const heroesRoutes:Routes = [
    {
        path: '',
        component: HeroesPageComponent,
        children: [
            {path: '', component: MyListPageComponent},
            {path: ':id', component: MyDetailComponent}
        ]
    }
];


// const heroesRoutes: Routes = [
//     { path: 'heroes',  component: MyListPageComponent },
//     { path: 'heroes/:id', component: MyDetailComponent }
// ];

export const heroesRouting = RouterModule.forChild(heroesRoutes);