import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ImgDialogComponent } from '../img-dialog/img-dialog.component';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cake-gallery',
  templateUrl: './cake-gallery.component.html',
  styleUrls: ['./cake-gallery.component.css']
})
export class CakeGalleryComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }
  assets: string = '../../../assets'
  c: any = {
    all: "All", basic: "Basic", premium: "Premium", seasonal: "Seasonal", birthday:"Birthday", wedding: "Wedding"}

  ngOnInit() { }

  cakes: Cake[] = [
    { url: 'D:/Iteration5/KarolinesCakes/assets/bacon_cupcakes.png', comments: 'Some comments would go here about how awesome Karoline\'s cakes are', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/bee_cupcakes.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/big_flower.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/bunny.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/elsa.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/gift_bag.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/happy_bday.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/pink_swirls.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/Red_White_Minnie.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/shamrocks.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/1.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/2.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/3.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/4.png`, comments: '', cakeTypes: [] },
    { url: `D:/Iteration5/KarolinesCakes/assets/5.png`, comments: '', cakeTypes: [] },
  ];

  cakeTypes: string[] = [
    "All", "Basic", "Premium", "Seasonal", "Birthday", "Wedding"
  ];

  navOrders(): void {
    const link = ['/orders'];
    this.router.navigate([link]);
  }

  openDialog: MatDialogRef<ImgDialogComponent, any>;

  openNewDialog(cakeUrl) {
    this.openDialog = this.dialog.open(
      ImgDialogComponent, {
        width: '70%',
        height: '80%',
        data: { imgUrl: cakeUrl }
      });
  }

  enlargeImg(cakeUrl): void {
      this.openNewDialog(cakeUrl);
  }
}
export interface Cake{
  url: string | SafeUrl;
  comments: string;
  cakeTypes: string[];
}
