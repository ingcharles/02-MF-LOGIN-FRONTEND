import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFirmaPazSalvoComponent } from './admin-firma-paz-salvo.component';

describe('AdminFirmaPazSalvoComponent', () => {
  let component: AdminFirmaPazSalvoComponent;
  let fixture: ComponentFixture<AdminFirmaPazSalvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFirmaPazSalvoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFirmaPazSalvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
