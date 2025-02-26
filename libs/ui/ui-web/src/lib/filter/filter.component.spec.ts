import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

interface TestFilterData {
    id: string;
    name: string;
}

describe('FilterComponent', () => {

    let component: FilterComponent<TestFilterData>;
    let fixture: ComponentFixture<FilterComponent<TestFilterData>>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [FilterComponent],
            providers: [provideNoopAnimations()],
        }).compileComponents();

        fixture = TestBed.createComponent(FilterComponent<TestFilterData>);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
