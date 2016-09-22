import {Component, OnInit, OnDestroy, HostBinding,
    trigger, transition, animate,
    style, state} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
@Component({
    selector: 'my-detail-page',
    template: `<div>详情页{{name}}</div>
                <div>
                    <img src="images/angular.png" />
                </div>
                <span (click)="next()">next</span> `,
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.8s ease-in')
            ]),
            transition('* => void', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
        ])
    ]
})
export class MyDetailComponent implements OnInit, OnDestroy {

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    constructor(private router:Router,
                private route:ActivatedRoute) {

    }

    private name:any;
    private sub:Subscription;

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

    next() {
        this.router.navigate(['/heroes', 'nextName']);
    }

}
