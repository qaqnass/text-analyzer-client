import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerResultComponent } from './analyzer-result.component';

describe('AnalyzerResultComponent', () => {
  let component: AnalyzerResultComponent;
  let fixture: ComponentFixture<AnalyzerResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzerResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyzerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AnalyzerResultComponent should create', () => {
    expect(component).toBeTruthy();
  });
});
