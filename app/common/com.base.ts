import {Component,ViewChild} from '@angular/core';
import {LoadingShade} from "../common/com.loading";
export class BaseComponent {
    constructor(){}

    //protected hasLoaded:boolean = false;

    @ViewChild(LoadingShade)
    private loadingShade: LoadingShade;

    onLoaded(){
        if(this.loadingShade){
            this.loadingShade.hasLoaded();

        }
        //this.hasLoaded = true;
    }


}
