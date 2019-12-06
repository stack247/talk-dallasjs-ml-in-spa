---

@snap[west]
@css[text-30 text-bold h1-title](machine learning model in SPA)

@ul[text-07]
* what's it?
* what are we going to build?
* steps
* get the model
* more on tf
* resources
@ulend
@snapend

---

## @fa[tenge h2-icon-color] what's it?
@ul[text-07]
* [TensorFlow](https://www.tensorflow.org)
@ulend

---

## @fa[wrench h2-icon-color] demo
what's are we going to build?
@ul[text-07]
* such [app](http://localhost:4200/mnist)
@ulend

---

## @fa[shoe-prints h2-icon-color] steps
@ul[text-07]
* generate an Angular app
* install TensorFlow.js
* get the model
* load the model
* make predictions
@ulend

---

### @fa[code h3-icon-color] generate an app
```bash
$ npm install -g @angular/cli
$ ng new such-app
```

---

### @fa[code h3-icon-color] install package
```bash
$ npm install @tensorflow/tfjs --save
```

---

### @fa[code h3-icon-color] get the model
```plaintext
/assets/models/mnist/model.json
/assets/models/mnist/group1-shard1of1
/assets/models/mnist/group2-shard1of1
...
```

---

### @fa[code h3-icon-color] load & predict
```typescript
// app.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawableDirective } from './drawable.directive';
import * as tf from '@tensorflow/tfjs';
```

---

### @fa[code h3-icon-color] load & predict (contd.)
@snap[text-06]
```typescript
// app.component.ts

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
```
@snapend

---

## @fa[cloud-download-alt h2-icon-color] get the model
@ul
* convert to TensorFlow JS model
  - from TensorFlow SavedModel and Keras SavedModel
  - save (python `Save` model) -> convert (`tensorflowjs_converter`)
* download pre-trained model.
* train your own model.
@ulend

---

## @fa[expand h2-icon-color] more on tf
@ul
* TensorFlow
  - demo apps
* TensorFlow JS
  - train
* TensorFlow Lite
@ulend

---

## @fa[balance-scale h2-icon-color] cloud vs edge
@snap[west text-07]
cloud
* ci/cd thru ml ops
* instant model update
* secure
* lightweight devices
@snapend

@snap[east text-07 text-left]
edge
* hardware-optimized
* performance (local vs network)
* offline
@snapend

---

## @fa[book-open h2-icon-color] resources
@snap[text-07]

code
  * https://github.com/stack247/talk-dallasjs-ml-in-spa
<br><br>

other stuff
  * [TensorFlow JS](https://www.tensorflow.org/js)
    - [demo apps](https://www.tensorflow.org/js/demos/)
  * [TensorFlow dev summit 2018](https://www.youtube.com/watch?v=YB-kfeNIPCE)
  * pre-trained models and datasets
    - https://www.tensorflow.org/js/models/
    - https://www.tensorflow.org/resources/models-datasets
    - https://tfhub.dev/
  * [convert pre-trained model](https://www.tensorflow.org/js/tutorials#convert_pretained_models_to_tensorflowjs)

@snapend