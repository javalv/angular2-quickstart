import {Component, Input, ViewContainerRef, TemplateRef} from "@angular/core";
@Component({
    selector: 'load-shade',
    template: `<div *ngIf="hide">loading...</div>`,
    styles : ['div{' +
                'position: absolute;' +
                'top:60px;bottom: 0px;left:0;right:0;' +
                'background-color: #8c8c8c' +
                '}'],
    // providers:[TemplateRef,ViewContainerRef]
})
export class LoadingShade{
    private hide:boolean;
    constructor( ) {
    }

    @Input() loaded:boolean = false;
    ngOnChanges(){
        console.log("ngOnChanges")
        if(this.loaded == true){
            this.hide = false;
            console.info("loaded:" + this.loaded);
        }else {
            this.hide = true;
        }
    }

}
