import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-join-create',
  templateUrl: './room-join-create.component.html',
  styleUrls: ['./room-join-create.component.css']
})
export class RoomJoinCreateComponent implements OnInit {
  name: any;
  avatar: any;
  action: any;
  createRoomForm: FormGroup;
  joinRoomForm: FormGroup;

  constructor(){
    this.createRoomForm = new FormGroup({
      roomname: new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      players: new FormControl(0,[Validators.required])
    })
    this.joinRoomForm = new FormGroup({
      roomid: new FormControl(null,[Validators.required]),
      cardNumber: new FormControl(null, [Validators.pattern('^[0-9]{16}$')]),
    })
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')
    this.avatar = '../../assets/'+localStorage.getItem('avatar')
  }

  joinCreate(str: any){
    this.action = str
  }

  createRoom(){
    console.log(this.createRoomForm)
  }

  joinRoom(){
    console.log(this.joinRoomForm)
  }

  onKeyPress(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.keyCode);
    const numericRegex = /^[0-9]+$/;
    if (!numericRegex.test(inputChar)) {
      event.preventDefault();
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedValue = inputValue
      .replace(/(\d{4})(?=\d)/g, '$1-') // Add dashes after every 4 digits
      .replace(/(\d{4})\d{8}(\d{4})/, '****-****-****-$2'); // Mask all but the last 4 digits
  
      inputElement.value = formattedValue.slice(0, 19); // Limit the length to 19 characters
      console.log('Card Number:', inputElement.value);
      
  }
  

}
