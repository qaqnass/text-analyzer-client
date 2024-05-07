import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading-service.service';

describe('LoadingService class tests', () => {
  let loadingService: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    loadingService = TestBed.inject(LoadingService);
  });

  it('Loading service is created', () => {
    expect(loadingService).toBeTruthy();
  });

  it('Loading service, the loading status should be true', () => {
    loadingService.loadingOn();
    let loadingStatus: boolean = false;
    loadingService.loading.subscribe((currentStatue: boolean) => loadingStatus = currentStatue);
    expect(loadingStatus).toBe(true);
  });

  it('Loading service, the loading status should be false', () => {
    loadingService.loadingOff();
    let loadingStatus: boolean = false;
    loadingService.loading.subscribe((currentStatue: boolean) => loadingStatus = currentStatue);
    expect(loadingStatus).toBe(false);
  });

});
