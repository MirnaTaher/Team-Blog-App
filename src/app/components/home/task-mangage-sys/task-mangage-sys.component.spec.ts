import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMangageSysComponent } from './task-mangage-sys.component';

describe('TaskMangageSysComponent', () => {
  let component: TaskMangageSysComponent;
  let fixture: ComponentFixture<TaskMangageSysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskMangageSysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskMangageSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
