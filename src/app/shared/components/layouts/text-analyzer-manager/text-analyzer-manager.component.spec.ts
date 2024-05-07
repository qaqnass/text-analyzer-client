import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { frequencyLettersVowel } from '../../../../handlers/testSampleHandler';
import { calculateLettersFrequencyHandler } from '../../../../handlers/textAnalyzerLocalHandler';

import { TextAnalyzerManagerComponent } from './text-analyzer-manager.component';

describe('TextAnalyzerManagerComponent', () => {
  let component: TextAnalyzerManagerComponent;
  let fixture: ComponentFixture<TextAnalyzerManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAnalyzerManagerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TextAnalyzerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function fillOutTheForm() {
    component.textAnyzerForm.patchValue({
      text: 'abcd',
      toBe: 'vowels',
    });
  }

  it('TextAnalyzerManager should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form when valid', () => {
    fillOutTheForm();

    const formElement = fixture.debugElement.query(By.css('form')).nativeElement;
    spyOn(component, 'onSubmit').and.callThrough();
    formElement.dispatchEvent(new Event('submit'));

    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should mark form control as invalid if value is empty', () => {
    const textAnalyzerArea = fixture.debugElement.query(By.css('textarea')).nativeElement;
    textAnalyzerArea.value = '';
    textAnalyzerArea.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.textAnyzerForm.controls['text'].invalid).toBe(true);
  });

  it('Should mark form control as valid as we have ABCD as value', () => {
    const textAnalyzerArea = fixture.debugElement.query(By.css('textarea')).nativeElement;

    textAnalyzerArea.value = 'ABCD';
    textAnalyzerArea.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.textAnyzerForm.controls['text'].valid).toBe(true);
  });
  it('should submit button be in the page', () => {
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton).toBeTruthy();
  });

  it('should reset button be in the page', () => {
    const resetButton = fixture.debugElement.query(By.css('button[type="button"]')).nativeElement;
    expect(resetButton).toBeTruthy();
  });

  it('should reset the form when reset button is clicked', () => {
    fillOutTheForm();
    const resetButton = fixture.debugElement.query(By.css('button[type="button"]')).nativeElement;
    resetButton.click();

    expect(component.textAnyzerForm.get('text')?.invalid).toBeTrue();
    expect(component.textAnyzerForm.get('toBe')?.value).toBe('vowels');
  });

  it('submit form, when there is not internet.', () => {
    component.internetService.toggleInternetState();
    expect(component.internetService.isOnline).toBeFalse();
    fillOutTheForm();
    expect(component.textAnyzerForm.valid).toBeTrue();
    const resultLetters = calculateLettersFrequencyHandler(
      component.textAnyzerForm.value,
      'aeiou',
      'include'
    );
    expect(resultLetters).toEqual(frequencyLettersVowel);
  });

});
