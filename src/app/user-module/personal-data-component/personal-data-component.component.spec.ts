import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataComponentComponent } from './personal-data-component.component';

describe('PersonalDataComponentComponent', () => {
  let component: PersonalDataComponentComponent;
  let fixture: ComponentFixture<PersonalDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalDataComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
