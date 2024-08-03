import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFirmaPazSalvoNewComponent } from './admin-firma-paz-salvo-new.component';

describe('AdminFirmaPazSalvoNewComponent', () => {
  let component: AdminFirmaPazSalvoNewComponent;
  let fixture: ComponentFixture<AdminFirmaPazSalvoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFirmaPazSalvoNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFirmaPazSalvoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
