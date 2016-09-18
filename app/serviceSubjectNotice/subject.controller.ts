/**
 * Created by lin on 16/8/28.
 */
import { Component }          from '@angular/core';
import { MissionService }     from './MissionService';
import { AstronautComponent } from './subject.component';
@Component({
    selector: 'mission-control',
    template: `
    <h2>Mission Control</h2>
    <button (click)="announce()">控制台发布任务</button>
    <my-astronaut *ngFor="let people of peoples"
      [people]="people">
    </my-astronaut>
    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
    // directives:[AstronautComponent],
    providers: [MissionService]
})
export class MissionControlComponent {
    peoples = ['张三', '李四', '王五'];
    history: string[] = [];
    missions = ['Fly to the moon!',
        'Fly to mars!',
        'Fly to Vegas!'];
    nextMission = 0;
    constructor(private missionService: MissionService) {
        missionService.missionConfirmed$.subscribe(
            people => {
                this.history.push(`${people} confirmed the mission`);
            });
    }
    announce() {
        let mission = this.missions[this.nextMission++];
        this.missionService.announceMission(mission);
        this.history.push(`Mission "${mission}" announced`);
        if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
    }
}