import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { UsersApiService } from '@angular-task/users-data';
import { of } from 'rxjs';

describe('UserProfileComponent', () => {

    let component: UserProfileComponent;
    let fixture: ComponentFixture<UserProfileComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [UserProfileComponent],
            providers: [
                provideMockStore({ initialState: {} }),
                provideHttpClientTesting(),
                { provide: UsersApiService, useValue: { getUser: () => of(null), getUsers: () => of(null) } },
                {
                    provide: ActivatedRoute, useValue: {
                        snapshot: {
                            paramMap: {
                                get: (key: string) => key === 'id' ? '1' : ''
                            }
                        }
                    }
                },
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(UserProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
