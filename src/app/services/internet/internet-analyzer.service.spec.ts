import { TestBed } from '@angular/core/testing';
import { InternetAnalyzerService } from './internet-analyzer.service';

describe('InternetService class tests', () => {
  let internetService: InternetAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    internetService = TestBed.inject(InternetAnalyzerService);
  });

  it('Internet service is created', () => {
    expect(internetService).toBeTruthy();
  });

  it('Internet service, the internet status should be false', () => {
    // isloading by default is true, after toggle it should be false.
    internetService.toggleInternetState();
    expect(internetService.isOnline).toEqual(false);
  });

});
