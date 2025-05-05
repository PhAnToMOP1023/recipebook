import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/theme.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,private themeService: ThemeService) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.themeService.loadSavedTheme();
  }
}
