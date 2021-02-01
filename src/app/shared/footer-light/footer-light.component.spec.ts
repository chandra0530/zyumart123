import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLightComponent } from './footer-light.component';

describe('FooterLightComponent', () => {
  let component: FooterLightComponent;
  let fixture: ComponentFixture<FooterLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
