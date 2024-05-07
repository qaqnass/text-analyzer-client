
import {
  Output,
  ViewChild,
  Component,
  ElementRef,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  AnalyzeKeywordsInterface,
} from '../../../../models/AnalyzerInterfaces';
import { 
  formMessagesErrorHandler, 
  requestApiMessageErrorHandler 
} from '../../../../handlers/errormessageHandler';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { ERRO_MESSAGE_TYPES } from '../../../../models/AnalyzerTypes';
import { TextAnalyzerAPIService } from '../../../../services/text-analyzer-api.service';
import { InternetAnalyzerService } from '../../../../services/internet/internet-analyzer.service';
import { LoadingService } from '../../../../services/loading/loading-service.service';
import { calculateLettersFrequencyHandler } from '../../../../handlers/textAnalyzerLocalHandler';

@Component({
  selector: 'app-text-analyzer-manager',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    SpinnerComponent,
    NgTemplateOutlet,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './text-analyzer-manager.component.html',
  styleUrl: './text-analyzer-manager.component.scss'
})
export class TextAnalyzerManagerComponent implements AfterViewInit {
  @ViewChild('textInputRef')
  keywordInputRef?: ElementRef<HTMLInputElement>;
  @Output()
  lettersFrequencyChange: EventEmitter<AnalyzeKeywordsInterface> =
    new EventEmitter<AnalyzeKeywordsInterface>();

  errorMessages: ERRO_MESSAGE_TYPES = {};
  newMessage: ERRO_MESSAGE_TYPES = {};
  textAnyzerForm: FormGroup;
  requestError: string | null = null;

  constructor(
    private fb: FormBuilder,
    public loadingService: LoadingService,
    public internetService: InternetAnalyzerService,
    private analyzerServiceAPI: TextAnalyzerAPIService,
  ) {
    this.textAnyzerForm = this.fb.group({
      text: ['', Validators.required],
      toBe: ['vowels', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.textAnyzerForm.valid) {
      const formValue = this.textAnyzerForm.value;
      const includeOrExclude = formValue.toBe === 'consonants' ? 'exclude' : 'include';
      this.requestError = null;
      
      if (this.internetService.isOnline) {
        this.analyzerServiceAPI.getTextAnalysis(formValue, 'aeiou', includeOrExclude)
        .subscribe(
            (lettersFrequency: any) => {
              this.lettersFrequencyChange.emit(lettersFrequency);
            },
            (error: any) => {
              this.requestError = requestApiMessageErrorHandler(error.error.message);
              console.error('Error fetching data:', error);
            }
          );
      } else {
        this.lettersFrequencyChange.emit(
          calculateLettersFrequencyHandler(formValue, 'aeiou', includeOrExclude));
      }

      this.onReset();
      this.errorMessages = {};
    } else {
      this.errorMessages = formMessagesErrorHandler(this.textAnyzerForm);
    }

    this.setKeywordInputFocus();
  }

  onReset(): void {
    this.textAnyzerForm.reset();
    this.textAnyzerForm.get('toBe')?.setValue('vowels');
  }

  setKeywordInputFocus(): void {
    if (this.keywordInputRef) {
      this.keywordInputRef.nativeElement.focus();
    }
  }

  ngAfterViewInit(): void {
    this.textAnyzerForm.get('text')?.valueChanges
      .subscribe((value: any) => {
        this.errorMessages = formMessagesErrorHandler(this.textAnyzerForm);
      });
    this.setKeywordInputFocus();
  }
}
