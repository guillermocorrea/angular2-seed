import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'user-profile',
    template: `
        <div class="jumbotron" *ngIf="user; else noActiveUser">
                <h2>{{user.name}} <small>{{user.username}}</small></h2>

                <input class="form-control" [(ngModel)]="user.name">
                <!-- 2way data binding-->
            </div>
            <ng-template #noActiveUser>
                <div class="jumbotron">
                    <span class="glyphicon glyphicon-hand-left"></span>
                    <h2>Choose an user</h2>
                </div>
            </ng-template>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
        .jumbotron .glyphicon {
            font-size: 80px;
        }
    `]
})
export class UserProfileComponent {
    @Input() user: User;
}