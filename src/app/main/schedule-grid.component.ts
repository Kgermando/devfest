import { Component, Input } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../realtime-data/auth.service';

@Component({
    selector: 'schedule-grid',
    templateUrl: 'schedule-grid.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleGridComponent {
    @Input() data;
    @Input() forceMobile: boolean;
    @Input() year;

    constructor(public ds: DataService, public auth: AuthService) {

    }
}
