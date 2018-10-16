import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalibilityEditorComponent } from './avalibility-editor.component';

describe('AvalibilityEditorComponent', () => {
  let component: AvalibilityEditorComponent;
  let fixture: ComponentFixture<AvalibilityEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalibilityEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalibilityEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
