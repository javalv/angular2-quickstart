import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
    selector: 'my-list-page',
    template: `<div>
                    <div (click)="onSelect('zhangsan')">张三</div>
                    <div (click)="onSelect('lisi')">李四</div>
                </div>`
})
export class MyListPageComponent {
    constructor(private router:Router){
    }

    onSelect(name) {
        this.router.navigate(['/hero', name]);
    }
}