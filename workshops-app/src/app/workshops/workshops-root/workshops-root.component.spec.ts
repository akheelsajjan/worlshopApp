import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsRootComponent } from './workshops-root.component';

describe('WorkshopsRootComponent', () => {
  let component: WorkshopsRootComponent;
  let fixture: ComponentFixture<WorkshopsRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopsRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
