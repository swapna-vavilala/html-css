import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelNewComponent } from './right-panel-new.component';

describe('RightPanelNewComponent', () => {
  let component: RightPanelNewComponent;
  let fixture: ComponentFixture<RightPanelNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
