import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';
import { Usuario } from './services/usuarios.service';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  private usuarios: Usuario[] = [];
  dataSource = new MatTableDataSource<Usuario>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private dataService: UsuariosService) {
    this.dataService.getUsuarios().subscribe((res: Usuario[]) => {
      this.usuarios = res;
      this.dataSource.data = this.usuarios;
      this.dataSource.paginator = this.dataSource.paginator;
    });
  }
  get get_usuarios() {
    return this.usuarios;
  }
}
