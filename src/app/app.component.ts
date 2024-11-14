import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';
import { Usuario } from './models/Usuario.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-api';

  private usuarios: Usuario[] = [];

  constructor(private dataService: UsuariosService) {
    this.dataService.getUsuarios().subscribe((res: Usuario[]) => {
      this.usuarios = res;
    });
  }

  get get_usuarios() {
    return this.usuarios;
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
}
