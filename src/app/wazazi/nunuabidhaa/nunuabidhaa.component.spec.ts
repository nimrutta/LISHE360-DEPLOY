import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NunuabidhaaComponent } from './nunuabidhaa.component';

describe('NunuabidhaaComponent', () => {
  let component: NunuabidhaaComponent;
  let fixture: ComponentFixture<NunuabidhaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NunuabidhaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NunuabidhaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
