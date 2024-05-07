import { Component } from '@angular/core';
import { InternetAnalyzerService } from '../../../services/internet/internet-analyzer.service';

/**
 * The InternetToggleComponent manages the UI and functionality of a toggle checkbox 
 * for enabling or disabling internet connectivity.
 * 
 * This component provides visual feedback to the user regarding the current 
 * internet connectivity status and allows them to toggle it on or off.
 */
@Component({
  selector: 'app-internet-toggle',
  standalone: true,
  imports: [],
  templateUrl: './internet-toggle.component.html',
  styleUrl: './internet-toggle.component.scss'
})
export class InternetToggleComponent {
  constructor(public internetService: InternetAnalyzerService) {
  }

  internetStatusHandler(): void {
    this.internetService.toggleInternetState();
  }
}
