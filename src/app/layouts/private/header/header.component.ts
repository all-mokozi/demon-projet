import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User, UserLoginResponse } from 'src/app/core/models/user.model';
import { ISecurityService, SECURITY_SERVICE_TOKEN } from 'src/app/core/service/Interface/security.interface.service';
import { SecurityService } from 'src/app/core/service/security.service';

@Component({
  selector: 'app-header-private',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
  public currentUser!:UserLoginResponse;
  constructor(@Inject(SECURITY_SERVICE_TOKEN) private securityService: ISecurityService,
    private router: Router

  ) { }
  ngOnInit(): void {
    this.currentUser = this.securityService.getCurrentUser()!;
  }
  logout(): void {  
    this.securityService.logout();
    this.router.navigate(['/public/login']);
  }

}
