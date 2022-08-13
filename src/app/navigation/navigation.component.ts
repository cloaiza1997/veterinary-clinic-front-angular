import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  navItems = [
    { label: 'Usuarios', route: '/' },
    { label: 'Mascotas', route: '/' },
    { label: 'Colaboradores', route: '/' },
    { label: 'Historias clínicas', route: '/' },
  ];

  ngOnInit(): void {}
}
