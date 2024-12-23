import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDialogInfoComponent } from './shared-dialog-info.component';

describe('SharedDialogInfoComponent', () => {
  let component: SharedDialogInfoComponent;
  let fixture: ComponentFixture<SharedDialogInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDialogInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedDialogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
