import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurSaisieComponent } from './erreur-saisie.component';

describe('ErreurSaisieComponent', () => {
  let component: ErreurSaisieComponent;
  let fixture: ComponentFixture<ErreurSaisieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErreurSaisieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreurSaisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
