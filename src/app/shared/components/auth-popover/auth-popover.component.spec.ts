import { ModalControllerMock } from './../../../testing/mocks-ionic';
import { PopoverController } from '@ionic/angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthPopoverComponent } from './auth-popover.component';



describe('AuthPopoverComponent', () => {
  let component: AuthPopoverComponent;
  let fixture: ComponentFixture<AuthPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPopoverComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: PopoverController, useClass: ModalControllerMock }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
