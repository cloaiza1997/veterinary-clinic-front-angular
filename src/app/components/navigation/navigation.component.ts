import { Component, OnInit } from '@angular/core';
import { USER_ROUTES } from 'src/app/apps/user/constants/user.constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  navItems = [
    { label: 'Usuarios', route: USER_ROUTES.HOME },
    { label: 'Mascotas', route: '/_' },
    { label: 'Colaboradores', route: '/_' },
    { label: 'Historias clínicas', route: '/_' },
  ];

  ngOnInit(): void {}
}
