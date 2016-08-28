import { Injectable } from '@angular/core';
import { Subject,Observable }    from 'rxjs/Subject';

@Injectable()
export class MissionService {
    // Observable string sources
    private missionAnnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();
    // Observable string streams
    missionAnnounced$:Observable = this.missionAnnouncedSource.asObservable();
    missionConfirmed$:Observable = this.missionConfirmedSource.asObservable();
    // Service message commands
    announceMission(mission: string) {
        this.missionAnnouncedSource.next(mission);
    }
    confirmMission(astronaut: string) {
        this.missionConfirmedSource.next(astronaut);
    }
}