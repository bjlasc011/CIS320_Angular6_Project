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
    { url: `${this.assets}/bacon_cupcakes.jpg`, comments: 'Some comments would go here about how awesome Karoline\'s cakes are', cakeTypes: [] },
    { url: `${this.assets}/bee_cupcakes.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/big_flower.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/bunny.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/elsa.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/gift_bag.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/happy_bday.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/pink_swirls.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/Red_White_Minnie.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/shamrocks.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/1.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/2.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/3.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/4.jpg`, comments: '', cakeTypes: [] },
    { url: `${this.assets}/5.jpg`, comments: '', cakeTypes: [] },
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

  enlargeImgEnter(cakeUrl): void {
      this.openNewDialog(cakeUrl);
  }
}
export interface Cake{
  url: string | SafeUrl;
  comments: string;
  cakeTypes: string[];
}
