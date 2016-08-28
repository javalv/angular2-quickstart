import { Component, Input, OnDestroy } from '@angular/core';
import { MissionService } from './MissionService';
import { Subscription }   from 'rxjs/Subscription';
@Component({
    selector: 'my-astronaut',
    template: `
    <p>
      {{people}}: <strong>{{mission}}</strong>
      <button
        (click)="confirm()"
        [disabled]="!announced || confirmed">
        子组件触发
      </button>
    </p>
  `
})
export class AstronautComponent implements OnDestroy {
    @Input() people: string;
    mission = '<no mission announced>';
    confirmed = false;
    announced = false;
    subscription: Subscription;
    constructor(private missionService: MissionService) {
        this.subscription = missionService.missionAnnounced$.subscribe(
            mission => {
                this.mission = mission;
                this.announced = true;
                this.confirmed = false;
            });
    }
    confirm() {
        this.confirmed = true;
        this.missionService.confirmMission(this.people);
    }
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}