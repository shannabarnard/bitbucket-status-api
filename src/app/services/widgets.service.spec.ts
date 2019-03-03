import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WidgetsService } from './widgets.service';

describe('WidgetsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: WidgetsService = TestBed.get(WidgetsService);
    expect(service).toBeTruthy();
  });
});
