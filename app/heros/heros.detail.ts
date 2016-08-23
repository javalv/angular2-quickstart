import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
@Component({
    selector: 'my-detail-page',
    template: `详情页{{name}}`
})
export class MyDetailComponent implements OnInit, OnDestroy{
    constructor(
        private router: Router,
        private route: ActivatedRoute){

    }

    private name: any;
    private sub: Subscription;
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            console.log(params);
            this.name = params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
