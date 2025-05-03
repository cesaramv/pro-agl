import { inject, Injectable } from '@angular/core';
import {
  injectMutation,
  injectQuery,
  QueryClient
} from '@tanstack/angular-query-experimental'
import { getIssuess, getLabels } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels(),
  }));

  issuessQuery = injectQuery(() => ({
    queryKey: ['issues'],
    queryFn: () => getIssuess(),
  }));
}
