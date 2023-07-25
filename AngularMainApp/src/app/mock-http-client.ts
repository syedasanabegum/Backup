// mock-http-client.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockHttpClient {
  get(): Observable<any> {
    const mockResponse = {
      results: [
        {
          trackName: 'Mock Track 1',
          artistName: 'Mock Artist 1',
          trackViewUrl: 'http://mock-track-url-1',
          artworkUrl30: 'http://mock-artwork-url-1',
          artistId: 'mock-artist-id-1',
        },
        // Add more mock items as needed
      ],
    };
    return of(mockResponse);
  }
}
