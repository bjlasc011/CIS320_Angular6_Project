import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ImgDialogComponent } from '../img-dialog/img-dialog.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cake-gallery',
  templateUrl: './cake-gallery.component.html',
  styleUrls: ['./cake-gallery.component.css']
})
export class CakeGalleryComponent implements OnInit {
  static get parameters() {
    return [DomSanitizer];
  }
  constructor(
    private router: Router,
    private dialog: MatDialog,
    public sanitizer: DomSanitizer
  ) { }

  baseUrl: string = "E:/Iteration2/KarolinesCakes";

  c: any = {
    all: "All", basic: "Basic", premium: "Premium", seasonal: "Seasonal", birthday:"Birthday", wedding: "Wedding"}

  ngOnInit() {
    console.log(this.sanitizer);
  }

  url(url): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }

  cakes: Cake[] = [
    { url: `${this.baseUrl}/assets/bacon_cupcakes.png`, comments: 'Some comments would go here about how awesome Karoline\'s cakes are', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/bee_cupcakes.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/big_flower.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/bunny.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/elsa.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/gift_bag.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/happy_bday.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/pink_swirls.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/Red_White_Minnie.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/shamrocks.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/1.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/2.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/3.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/4.png`, comments: '', cakeTypes: [] },
    { url: `${this.baseUrl}/assets/5.png`, comments: '', cakeTypes: [] },
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
        width: '650px',
        height: '650px',
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
