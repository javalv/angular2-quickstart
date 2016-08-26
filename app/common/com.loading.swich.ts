import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
    selector: '[loadComplete]'
})
export class LoadSwichDirective {
    private el: HTMLElement;
    constructor(el: ElementRef) { this.el = el.nativeElement; }

    private loaded() {
        this.el.style.display = 'none';
    }
}
