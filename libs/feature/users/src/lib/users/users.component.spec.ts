import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { UsersApiService } from '@angular-task/users-data';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('UsersComponent', () => {

    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [UsersComponent],
            providers: [
                { provide: UsersApiService, useValue: { getUser: () => of({}), getUsers: () => of([]) } },
                provideNoopAnimations(),
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
