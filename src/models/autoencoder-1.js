import "babel-polyfill";

import * as tf from "@tensorflow/tfjs";

class AutoEncoder {
    
  constructor() {
      this.model = null;
  }

  setup() {
    const inputSize = 1;
    const hiddenSize = 1;
    const outputSize = 1;
    // Input
    const input = tf.input({ shape: inputSize });
    // Encoder
    const encoder = tf.layers
      .dense({ units: hiddenSize, activation: "relu" })
      .apply(input);
    // Decoder
    const decoder = tf.layers
      .dense({ units: outputSize, activation: "sigmoid" })
      .apply(encoder);
    // Model
     this.model = tf.model({ inputs: input, outputs: decoder });
     this.model.compile({ optimizer: "adam", loss: "meanSquaredError" });
    //autoencoder.summary();
  }
}

export default AutoEncoder;
