import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserItemComponent } from './user-item.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { User } from '@angular-task/users-data';
import { InputSignal, signal } from '@angular/core';

describe('UserItemComponent', () => {

    let component: UserItemComponent;
    let fixture: ComponentFixture<UserItemComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [UserItemComponent],
            providers: [
                provideMockStore({ initialState: {} }),
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

        fixture = TestBed.createComponent(UserItemComponent);
        component = fixture.componentInstance;

        const user: User = {
            id: 89,
            name: 'Leanne Graham 89',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        };

        component.user = signal<User>(user) as unknown as InputSignal<User>;

        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
