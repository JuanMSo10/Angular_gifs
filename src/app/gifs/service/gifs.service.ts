import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchBoxComponent } from '../components/search-box/search-box.component';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'yliPFFVE3c7sJtJCyQJx5W3qcnAFZil1';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
        this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);

  }

   searchTag(tag: string): void{
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)

    this.http.get(`${this.serviceUrl}/search`, {params})
    .subscribe( resp =>{
      console.log(resp);
    });

  }

}
