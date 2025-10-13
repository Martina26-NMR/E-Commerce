import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  currentUserName: string | null = null;
  isLoggedInUser = false;
  numOfLoggedUserCartItems: number = 0;

  constructor(private authService: AuthService, private CardService: CardService) { }

  ngOnInit(): void {

    this.authService.CurrentUserNameSubject.subscribe({
      next: (value) => { this.currentUserName = value }
    })

    if (!this.currentUserName) {
      this.currentUserName = this.authService.getCurrentUserName();
    }

    this.CardService.numOfCartItemsSubject.subscribe({
      next: (value) => { this.numOfLoggedUserCartItems = value }
    })


    this.CardService.getUPdatedCartItemsNumber()


    this.authService.isLoggedIn.subscribe({
      next: (value) => {
        this.isLoggedInUser = value
      }
    })
  }

  logout() {
    this.authService.logout();
  }

}
