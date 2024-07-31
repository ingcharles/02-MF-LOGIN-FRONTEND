import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminPazSalvoComponent } from './create-admin-paz-salvo.component';

describe('CreateAdminPazSalvoComponent', () => {
  let component: CreateAdminPazSalvoComponent;
  let fixture: ComponentFixture<CreateAdminPazSalvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAdminPazSalvoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdminPazSalvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
