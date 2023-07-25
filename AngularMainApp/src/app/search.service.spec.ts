import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import { MockHttpClient } from './mock-http-client';
import { HttpClient } from '@angular/common/http';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchService,
        { provide: HttpClient, useClass: MockHttpClient }, 
      ],
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
/*
  it('should fetch data from the API and map it to SearchItems', (done) => {
    const searchTerm = 'Mock';
    const expectedSearchItems = [
      {
        track: 'Mock Track 1',
        artist: 'Mock Artist 1',
        link: 'http://mock-track-url-1',
        thumbnail: 'http://mock-artwork-url-1',
        artistId: 'mock-artist-id-1',
      },
      // Add more expected search items based on your mock data
    ];

    // Call the service method
    service.getDataFromApi(searchTerm).then((searchItems) => {
      expect(searchItems).toEqual(expectedSearchItems);
      done();
    });
  });
*/
  // Add more unit tests as needed
});
