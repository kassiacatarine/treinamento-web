import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  genders = ['Feminino', 'Masculino'];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      gender: [null, Validators.required],
      isFavorite: [false],

      info: this.formBuilder.group({
        avatar: [null],
        company: [null],
        address: [null],
        phone: [null, Validators.required],
        comments: [null],
      })
    });
  }

  saveForm() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
