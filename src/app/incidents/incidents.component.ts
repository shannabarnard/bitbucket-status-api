import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})

export class IncidentsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'status', 'created_at'];
  tableDatabase: TableHttpDatabase | null;
  data: BitBucketIssue[] = [];
  dataSource: MatTableDataSource<BitBucketIssue>;

  resultsLength = 0;
  isLoadingResults = true;


  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.tableDatabase = new TableHttpDatabase(this.http);
    
    merge(this.sort.sortChange)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.tableDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction);
        }),
        map(data => {
          
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.incidents.length;
          console.log(data.incidents.length)
          console.log(data.incidents)
          return data.incidents;

        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.data = data; this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      });
  }
}

export interface BitBucketApi {
  incidents: BitBucketIssue[];
}

export interface BitBucketIssue {
  name: string;
  status: string;
  created_at: number;
}

/** An example database that the data source uses to retrieve data for the table. */
export class TableHttpDatabase {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string, order: string): Observable<BitBucketApi> {
    const href = 'https://bqlf8qjztdtr.statuspage.io/api/v2/incidents.json';
    const requestUrl =
        `${href}?q=&sort=${sort}&order=${order}`;

    return this.http.get<BitBucketApi>(requestUrl);
  }
}
