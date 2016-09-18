import {Component} from '@angular/core';
import {VoterComponent} from './common/com.output';
@Component({
    selector: 'my-output-page',
    template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <my-voter *ngFor="let voter of voters"
      [name]="voter"
      (onVoted)="onVotedTest($event)">
    </my-voter>
  `,
    // directives:[VoterComponent]
})
export class MyOutputComponent {
    agreed = 0;
    disagreed = 0;
    voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
    onVotedTest(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
}