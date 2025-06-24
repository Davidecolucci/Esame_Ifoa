import { Component, inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactDto } from '../../model/contact.dto';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-contact',
  imports: [],
  templateUrl: './browse-contact.component.html',
  styleUrl: './browse-contact.component.css'
})
export class BrowseContactComponent implements OnInit {

  public contacts: ContactDto[] = [];
  private _routing = inject(Router);
  private _contactService = inject(ContactService);
  
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this._contactService.getContacts().subscribe( contact => {
      this.contacts = contact;
    });
  }

  goToAddContact() {
    this._routing.navigate(['add-contact']);
  }

}
