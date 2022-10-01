import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersService } from '../services/users.service';
import { UserInterface } from '../shared/interfaces/user-interface';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public usersList : UserInterface[];

  constructor(private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private userService : UsersService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(result => {
      this.usersList = result;
    });
  }

  async openModal(item?){
    const modal = await this.modalController.create({
      component: UserEditComponent,
      componentProps: {userToUpdate: item}
    });
    modal.present();
  }

}
