import * as tf from "@tensorflow/tfjs";

class AuotData {
    
  constructor() {
    this.url = "https://storage.googleapis.com/tfjs-tutorials/carsData.json";
  }

  async getData() {
    const carsDataReq = await fetch(this.url);
    const carsData = await carsDataReq.json();

    const cleaned = carsData
      .map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower
      }))
      .filter(car => car.mpg != null && car.horsepower != null);

    //const values = this.setData(cleaned);
    return cleaned;
  }

  setData(data) {
    const values = data.map(d => ({
      x: d.horsepower,
      y: d.mpg
    }));
    return values;
  }

  convertToTensor(data) {
    return tf.tidy(() => {
      // Step 1. Shuffle the data
      tf.util.shuffle(data);
      
      // Step 2. Convert data to Tensor
      const inputs = data.map(d => d.horsepower);
      const labels = data.map(d => d.mpg);

      const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
      const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

      //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
      const inputMax = inputTensor.max();
      const inputMin = inputTensor.min();
      const labelMax = labelTensor.max();
      const labelMin = labelTensor.min();

      const normalizedInputs = inputTensor
        .sub(inputMin)
        .div(inputMax.sub(inputMin));
      const normalizedLabels = labelTensor
        .sub(labelMin)
        .div(labelMax.sub(labelMin));

      return {
        inputs: normalizedInputs,
        labels: normalizedLabels,
        // Return the min/max bounds so we can use them later.
        inputMax,
        inputMin,
        labelMax,
        labelMin
      };

      //return dataTensor;
      
    });
  }

  showData() {}
}

export default AuotData;
