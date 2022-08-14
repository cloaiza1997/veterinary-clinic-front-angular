import { Component, OnInit } from '@angular/core';
import { PET_ROUTES } from 'src/app/apps/pets/constants/pet.constants';
import { USER_ROUTES } from 'src/app/apps/user/constants/user.constants';
import { WORKER_ROUTES } from 'src/app/apps/worker/constants/worker.constants';

/**
 * Barra de navegación
 */
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  navItems = [
    { label: 'Usuarios', route: USER_ROUTES.HOME },
    { label: 'Mascotas', route: PET_ROUTES.HOME },
    { label: 'Colaboradores', route: WORKER_ROUTES.HOME },
  ];

  ngOnInit(): void {}
}
