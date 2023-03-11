import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  public name: any;
  public avatar : any;

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //want to get the name from the profile page.
      this.name = localStorage.getItem('name')
  }

  onAvatarSelection(avatar: any){
    this.avatar = avatar
    localStorage.setItem('avatar', avatar)
  }

  submit(){
    this.router.navigate(['/room-join-create'])
  }

}
