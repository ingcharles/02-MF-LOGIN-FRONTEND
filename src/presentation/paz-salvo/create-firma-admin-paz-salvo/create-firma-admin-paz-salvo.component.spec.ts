import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirmaAdminPazSalvoComponent } from './create-firma-admin-paz-salvo.component';

describe('CreateAdminPazSalvoComponent', () => {
  let component: CreateFirmaAdminPazSalvoComponent;
  let fixture: ComponentFixture<CreateFirmaAdminPazSalvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFirmaAdminPazSalvoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFirmaAdminPazSalvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
