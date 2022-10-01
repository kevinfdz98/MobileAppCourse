import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserInterface } from 'src/app/shared/interfaces/user-interface';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  userToUpdate: UserInterface;
  constructor(private modalCtrl: ModalController) {}
  
  name: string;
  lastName: string;
  email: string;
  degree: string;

  ngOnInit() {
    if(this.userToUpdate){
      this.name = this.userToUpdate.firstName;
      this.lastName = this.userToUpdate.lastName;
      this.email = this.userToUpdate.email;
      this.degree = this.userToUpdate.degree;
    }
  }
  
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

}
