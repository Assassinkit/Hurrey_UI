import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
name: any;
nameFormGroup: any = FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.createForm();
      
  }
  createForm() {
    this.nameFormGroup = this.fb.group({
      name: new FormControl (null, [Validators.required]),
    });
  }


  submit() {
    // console.log('Name of the Profile: ', this.name);
    if (this.nameFormGroup.valid) {
      //then navigate it to the next page
      localStorage.setItem('name',this.nameFormGroup.value.name)
      this.router.navigate(['/ChooseYourAvatar'], { state: { name: this.nameFormGroup.value.name } });
    }
    
  }

}
