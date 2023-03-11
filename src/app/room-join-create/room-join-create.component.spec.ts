import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomJoinCreateComponent } from './room-join-create.component';

describe('RoomJoinCreateComponent', () => {
  let component: RoomJoinCreateComponent;
  let fixture: ComponentFixture<RoomJoinCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomJoinCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomJoinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
