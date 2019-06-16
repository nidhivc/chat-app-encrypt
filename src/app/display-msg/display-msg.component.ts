import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService, AlertService } from '../_services';

@Component({
  selector: 'app-display-msg',
  templateUrl: './display-msg.component.html',
  styleUrls: ['./display-msg.component.scss']
})
export class DisplayMsgComponent implements OnInit {

  link;
  loading = false;
  message;
  accessLimit: any = 0
  acccessCount;
  constructor(
    private router: ActivatedRoute,
    private userService: MessageService,
    private alertService: AlertService,
    // public dialog: MatDialog
  ) {
    this.link = this.router.snapshot.params['link'];
    this.accessLimit = localStorage.getItem('accessLimit');
    this.acccessCount = this.accessLimit
    this.geUrl()
  }

  ngOnInit() {

  }
  geUrl() {
    this.loading = true;
    this.userService.getURL(this.link)
      .subscribe(
        (data: any) => {
          if (data != undefined) {
            this.message = data[0].message
            this.accessLimit--
          }
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}