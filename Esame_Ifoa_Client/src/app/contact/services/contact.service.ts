import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactDto } from '../model/contact.dto';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _http = inject(HttpClient);
  private _apiUrl = ("https://localhost:44380/api/Contact");
  
  public getContacts(): Observable<ContactDto[]> {
    return this._http.get<ContactDto[]>(`${this._apiUrl}`);
  }

  public addContact(contact: ContactDto): Observable<ContactDto> {
    return this._http.post<ContactDto>(`${this._apiUrl}`, contact);
  }
}
