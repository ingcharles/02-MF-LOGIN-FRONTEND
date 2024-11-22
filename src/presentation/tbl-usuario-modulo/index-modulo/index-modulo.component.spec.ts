import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexModulosComponent } from './index-modulo.component';

describe('IndexModulosComponent', () => {
  let component: IndexModulosComponent;
  let fixture: ComponentFixture<IndexModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexModulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
