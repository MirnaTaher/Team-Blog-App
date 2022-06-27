import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubSectionComponent } from './hub-section.component';

describe('HubSectionComponent', () => {
  let component: HubSectionComponent;
  let fixture: ComponentFixture<HubSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
