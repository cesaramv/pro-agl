import { inject, Injectable, signal } from '@angular/core';
import {
  injectMutation,
  injectQuery,
  QueryClient
} from '@tanstack/angular-query-experimental'
import { getIssuess, getLabels } from '../actions';
import { State } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  selectedState = signal<State>(State.All);
  selectedLabels = signal(new Set<string>())

  labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels(),
  }));

  issuessQuery = injectQuery(() => ({
    queryKey: ['issues', { state: this.selectedState(), selectedLabels: [...this.selectedLabels()] }],
    queryFn: () => getIssuess(this.selectedState(), [...this.selectedLabels()]),
  }));

  showSelectedState(state: State) {
    this.selectedState.set(state);
  }

  toggleLabel(label: string) {
    const labels = this.selectedLabels();

    if (labels.has(label)) labels.delete(label);
    else labels.add(label);

    this.selectedLabels.set(new Set(labels));
  }
}
