import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<h1>Component Router</h1>
                <nav>
                    <a routerLink="/home" routerLinkActive="active">Crisis Center</a>
                    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
                    <a routerLink="/subject" routerLinkActive="active">subject</a>
                    <a routerLink="/output" routerLinkActive="active">output</a>
                    <a routerLink="/es6" routerLinkActive="active">es6</a>
                </nav>
                <router-outlet></router-outlet>`
})
export class AppComponent {
}