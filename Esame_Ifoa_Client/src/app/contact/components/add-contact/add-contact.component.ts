import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactDto } from '../../model/contact.dto';

@Component({
  selector: 'app-add-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {

  public form!: FormGroup;
  public contacts!: ContactDto;
  private _contactService = inject(ContactService);
  private _fb = inject(FormBuilder);

  constructor() {
    this.form = this._fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  onsubmit() {
    if (this.form.valid) {
      this._contactService.addContact(this.form.value).subscribe(data => {
        this.contacts = data;
      });
    }
    this.form.reset();
  }
}
