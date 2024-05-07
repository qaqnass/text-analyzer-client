import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import {
  AnalyzeInterface,
  AnalyzeKeywordsInterface,
  PostParamInterface
} from '../models/AnalyzerInterfaces';

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzerAPIService {

  constructor(private http: HttpClient) { }

  getTextAnalysis(formValue: AnalyzeInterface, letters: string, toBe: string) {
    const data: PostParamInterface = {
      text: formValue.text,
      label: formValue.toBe,
      toBe,
      letters
    };
    return this.http.post<AnalyzeKeywordsInterface>(
      `${environment.apiUrl}/textanalyzer/v1/api/generate`, data);
  }
}
