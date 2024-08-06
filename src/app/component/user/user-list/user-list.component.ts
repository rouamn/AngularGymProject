import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  confirmDelete(userId: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUser(userId);
      }
    });
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response) => {
        Swal.fire(
          'Supprimé!',
          'L\'utilisateur a été supprimé.',
          'success'
        );
        this.users = this.users.filter(user => user.idUtilisateur !== userId);
      },
      (error) => {
        console.error('Error deleting user', error);
        Swal.fire(
          'Erreur!',
          'Une erreur s\'est produite lors de la suppression de l\'utilisateur.',
          'error'
        );
      }
    );
  }

  goToAdduser(): void {
    this.router.navigate(['component/adduser']);
  }
}
