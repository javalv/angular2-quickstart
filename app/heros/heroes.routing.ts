import { Routes, RouterModule } from '@angular/router';

import { MyListPageComponent }    from './heroes.list';
import { MyDetailComponent }  from './heros.detail';

const heroesRoutes: Routes = [
    { path: 'heroes',  component: MyListPageComponent },
    { path: 'hero/:id', component: MyDetailComponent }
];

export const heroesRouting = RouterModule.forChild(heroesRoutes);