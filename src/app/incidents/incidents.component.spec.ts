import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentsComponent } from './incidents.component';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('IncidentsComponent', () => {
  let component: IncidentsComponent;
  let fixture: ComponentFixture<IncidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          MatTableModule,
          MatSortModule,
          BrowserAnimationsModule,
          HttpClientTestingModule
        ],
      declarations: [ IncidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
