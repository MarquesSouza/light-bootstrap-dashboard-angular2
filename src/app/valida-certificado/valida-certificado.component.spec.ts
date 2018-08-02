import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaCertificadoComponent } from './valida-certificado.component';

describe('ValidaCertificadoComponent', () => {
  let component: ValidaCertificadoComponent;
  let fixture: ComponentFixture<ValidaCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidaCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
