import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MissionService {
    // Observable string sources
    private missionAnnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();
    // Observable string streams
    missionAnnounced$:Observable<string> = this.missionAnnouncedSource.asObservable();
    missionConfirmed$:Observable<string> = this.missionConfirmedSource.asObservable();
    // Service message commands
    announceMission(mission: string) {
        this.missionAnnouncedSource.next(mission);
    }
    confirmMission(astronaut: string) {
        this.missionConfirmedSource.next(astronaut);
    }
}