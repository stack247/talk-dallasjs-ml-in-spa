import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawableDirective } from './drawable.directive';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-mnist',
  templateUrl: './mnist.component.html',
  styleUrls: ['./mnist.component.css']
})
export class MnistComponent implements OnInit {
  predictedNumber: string;
  model: tf.LayersModel;
  predictions: any;

  @ViewChild(DrawableDirective, { static: false }) canvas;

  constructor() { }

  ngOnInit() {
    this.loadModel();
  }

  async loadModel() {
    this.model = await tf.loadLayersModel('/assets/models/mnist/model.json');
  }

  async predict(imageData: ImageData) {
    await tf.tidy(() => {
      // Convert the canvas pixels to 
      let img: any = tf.browser.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28, 1]);
      img = tf.cast(img, 'float32');

      // Make and format the predications
      const output = this.model.predict(img) as any;

      // Save predictions on the component
      this.predictions = Array.from(output.dataSync());

      for (let i = 0; i < this.predictions.length; i++) {
        if (this.predictions[i] == "1") {
          this.predictedNumber = i.toString();
        }
      }
      if (this.predictedNumber == "") {
        this.predictedNumber = ":(";
      }
    });
  }

  clear() {
    this.predictedNumber = "";
  }
}
