export class BaseComponent {
    constructor(){}

    protected hasLoaded:boolean = false;

    onLoaded(){
        this.hasLoaded = true;
    }

}
