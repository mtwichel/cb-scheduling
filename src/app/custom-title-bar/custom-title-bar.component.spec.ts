import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTitleBarComponent } from './custom-title-bar.component';

describe('CustomTitleBarComponent', () => {
  let component: CustomTitleBarComponent;
  let fixture: ComponentFixture<CustomTitleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTitleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
