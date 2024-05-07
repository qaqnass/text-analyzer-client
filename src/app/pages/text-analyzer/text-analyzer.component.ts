import { Component } from '@angular/core';
import {
  AnalyzeKeywordsInterface,
} from '../../models/AnalyzerInterfaces';
import {
   HeaderComponent 
} from '../../shared/components/layouts/header/header.component';
import {
  AnalyzerResultComponent
} from '../../shared/components/layouts/analyzer-result/analyzer-result.component';
import {
  TextAnalyzerManagerComponent
} from '../../shared/components/layouts/text-analyzer-manager/text-analyzer-manager.component';

@Component({
  selector: 'app-text-analyzer',
  standalone: true,
  imports: [
    HeaderComponent,
    AnalyzerResultComponent,
    TextAnalyzerManagerComponent
  ],
  templateUrl: './text-analyzer.component.html',
  styleUrl: './text-analyzer.component.scss'
})
export class TextAnalyzerComponent {

  analyzekeywords: AnalyzeKeywordsInterface[] = [];
  onLettersFrequencyChange(keywords: AnalyzeKeywordsInterface): void {
    this.analyzekeywords.unshift({
      ...keywords,
      keyIndex: this.analyzekeywords.length + 1,
    });
  }

  onResetClicked(): void {
    this.analyzekeywords = []
  }
}
