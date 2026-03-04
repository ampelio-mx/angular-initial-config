import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInformationComponentComponent } from './work-information-component.component';

describe('WorkInformationComponentComponent', () => {
  let component: WorkInformationComponentComponent;
  let fixture: ComponentFixture<WorkInformationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkInformationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkInformationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
