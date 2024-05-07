import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnalyzeKeywordsInterface } from '../../../../models/AnalyzerInterfaces';
import { MatIconModule } from '@angular/material/icon';
import { NumberCommaPipe } from '../../../../shared/pipe/number-comma.pipe'

@Component({
  selector: 'app-analyzer-result',
  standalone: true,
  imports: [MatIconModule, NumberCommaPipe],
  templateUrl: './analyzer-result.component.html',
  styleUrl: './analyzer-result.component.scss'
})
export class AnalyzerResultComponent {
  @Input()
  analyzekeywords: AnalyzeKeywordsInterface[] = [];
  @Output()
  resetClicked: EventEmitter<any> = new EventEmitter();

  onReset(): void {
    this.resetClicked.emit();
  }
}
