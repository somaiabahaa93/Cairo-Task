import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCallComponent } from './project-call.component';

describe('ProjectCallComponent', () => {
  let component: ProjectCallComponent;
  let fixture: ComponentFixture<ProjectCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
