import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService} from "../profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  constructor(private profileService: ProfileService) { }

  getProfile(): void{
    this.profileService.getProfile()
      .subscribe(profile => this.profile = profile);
  }
  ngOnInit() {
    this.getProfile();
  }

}
