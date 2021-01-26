import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageRepositoryService } from '../domain/page-repository.service';
import { Page } from '../domain/page-models';

@Injectable()
export class HttpPageRepositoryService extends PageRepositoryService {

  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  getPage(): Observable<Page> {
    return this.httpClient.get<Page>('https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json');
  }
}
