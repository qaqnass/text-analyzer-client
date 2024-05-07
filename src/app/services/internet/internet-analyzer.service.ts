import { Injectable } from '@angular/core';


/**
 * 
 * InternetAnalyzerService handles the state of internet indicators in the application.
 * It provides a toggle method for changing the internet  status.
 * 
 * */ 
@Injectable({
  providedIn: 'root'
})
export class InternetAnalyzerService {
  isOnline = true;

  toggleInternetState() {
    this.isOnline = !this.isOnline;
  }
}
