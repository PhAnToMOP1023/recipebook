import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { ThemeService } from '../shared/theme.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  isDrawerOpen = false;
  isMobileView = false;
  isDarkMode = false;


  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.checkScreenWidth();

  

    window.addEventListener('resize', this.checkScreenWidth.bind(this));
  
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    window.removeEventListener('resize', this.checkScreenWidth.bind(this));
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
  
  closeDrawer() {
    this.isDrawerOpen = false;
  }

  checkScreenWidth() {
    this.isMobileView = window.innerWidth <= 768;
  }
  onToggleTheme() {
    this.themeService.toggleTheme();
  }



}
