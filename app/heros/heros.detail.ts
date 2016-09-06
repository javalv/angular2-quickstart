import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
@Component({
    selector: 'my-detail-page',
    template: `<span>详情页{{name}}</span>
                <span (click)="next()">next</span> `
})
export class MyDetailComponent implements OnInit, OnDestroy{
    constructor(
        private router: Router,
        private route: ActivatedRoute){

    }

    private name: any;
    private sub: Subscription;
    ngOnInit() {

        // this.name = this.route.snapshot.params['id']; 这种方式为不需要连续调用详情页，常规模式
        //用Subscription接收主要是为了连续的调用一个详情页
        this.sub = this.route.params.subscribe(params => {
            console.log(params);
            this.name = params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    next(){
        this.router.navigate(['/heroes', 'nextName']);
    }

}
