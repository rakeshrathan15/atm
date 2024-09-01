import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAtmComponent } from './create-atm.component';

describe('CreateAtmComponent', () => {
  let component: CreateAtmComponent;
  let fixture: ComponentFixture<CreateAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAtmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
