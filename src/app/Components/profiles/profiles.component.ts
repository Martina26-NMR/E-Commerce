import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  standalone: false,
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent implements OnInit {

  currentUserName: string | null = null;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.CurrentUserNameSubject.subscribe({
      next: (value) => { this.currentUserName=value}
    })
  }
}


