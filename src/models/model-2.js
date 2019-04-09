import * as tf from '@tensorflow/tfjs';

// HIGH LEVEL API
const model = tf.sequential();
model.add(
    tf.layers.simpleRNN({
        units: 20,
        recurrentInitializer: 'GlorotNormal',
        inputShape: [80, 4]
    })
);
const optimizer = tf.train.sgd(LEARNING_RATE);
model.compile({optimizer, loss: 'categoricalCrossentropy'})
model.fit({ x: data, y: labels});
