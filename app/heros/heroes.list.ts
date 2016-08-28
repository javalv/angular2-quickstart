import {Component,ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {LoadingShade} from "../common/com.loading";
import {BaseComponent} from "../common/com.base";
@Component({
    selector: 'my-list-page',
    template: `<div>
                    <div (click)="onSelect('zhangsan')">张三</div>
                    <div (click)="onSelect('lisi')">李四</div>
                </div>
                <load-shade ></load-shade>`,
    directives:[LoadingShade]

})
export class MyListPageComponent extends BaseComponent{
    constructor(private router:Router){
        super();
    }


    ngOnInit(){
        //super.onLoaded();
        setTimeout(()=>{
            super.onLoaded();

        },2000)
    }

    ngAfterViewInit() {
        super.onLoaded();
    }

    onSelect(name) {
        this.router.navigate(['/hero', name]);
    }
}