import { Component } from '@angular/core';
import { 
  InternetToggleComponent 
} from '../../internet-toggle/internet-toggle.component';

@Component({
  selector: 'analyzer-header',
  standalone: true,
  imports: [InternetToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
