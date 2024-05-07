import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * 
 * LoadingService handles the state of loading indicators in the application.
 * It provides methods for showing(loadingOn) and hiding(loadingOff) loading indicators
 * 
 * */ 
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject:  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading = this.loadingSubject.asObservable();

  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }
}
