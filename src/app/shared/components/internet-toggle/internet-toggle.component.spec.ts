import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InternetToggleComponent } from './internet-toggle.component';

describe('InternetToggleComponent', () => {
  let component: InternetToggleComponent;
  let fixture: ComponentFixture<InternetToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetToggleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InternetToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('InternetToggle component should create', () => {
    expect(component).toBeTruthy();
  });
});
