import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';
import { InputSignal, signal } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('SelectComponent', () => {

    let component: SelectComponent;
    let fixture: ComponentFixture<SelectComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [SelectComponent],
            providers: [
                provideNoopAnimations(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(SelectComponent);
        component = fixture.componentInstance;

        component.default = signal('name') as unknown as InputSignal<string>;
        component.options = signal([]) as unknown as InputSignal<string[]>;

        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
