import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SearchItem } from "./search-item.model";

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}
 getDataFromApi(searchTerm: string): Promise<SearchItem[]> {
    
    return new Promise<SearchItem[]>((resolve, reject) => {
      const apiURL = `https://itunes.apple.com/search?term=${searchTerm}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then((response: any) => {
          const results = response.results.map((item: any) => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
          resolve(results);;
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
  
}
