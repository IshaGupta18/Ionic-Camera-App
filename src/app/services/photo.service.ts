import { Injectable } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
class Photo{
  data: any;
}
export class PhotoService {
  public photos: Photo[] = [];
  constructor() { }
}
