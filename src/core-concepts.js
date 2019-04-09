import "babel-polyfill";
import * as tf from '@tensorflow/tfjs';

/*
// TF.SPLIT
const x = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
x.print();
console.log(x.shape)

const [a, b] = tf.split(x, 2, 1);
a.print();
b.print();
*/

/*
// Gradient calculation
// f(a, b) = a * b
const f = (a, b) => a.mul(b);
// df/da = b, df/db = a
const g = tf.valueAndGrads(f);

const a = tf.tensor1d([2, 3]);
const b = tf.tensor1d([-2, -3]);
const {value, grads} = g([a, b]);

const [da, db] = grads;

console.log('value');
value.print();

console.log('da');
da.print();
console.log('db');
db.print();
*/

/*
const shape = [2, 3]; // 2 rows, 3 columns
const a1 = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);

const b1 = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
b1.print();

// scalar
const c = tf.scalar(3.14);
c.print();

// tensor 1D
const d = tf.tensor1d([1, 2, 3]);
d.print();

// Pass a nested array.
const e2 = tf.tensor2d([[1, 2], [3, 4]]);
e2.print();

// Pass a flat array and specify a shape.
const f2 = tf.tensor2d([1, 2, 3, 4], [2, 2]);
f2.print();

// Pass a nested array.
const g = tf.tensor3d([[[1], [2]], [[3], [4]]]);
g.print();

// Pass a flat array and specify a shape.
const h = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
console.log('h'); h.print();

// Pass a nested array.
const i = tf.tensor4d([[[[1], [2]], [[3], [4]]]]);
i.print();

// Pass a flat array and specify a shape.
const j = tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]);
j.print();

//Variables
const initialValues = tf.zeros([5]);
const biases = tf.variable(initialValues); // initialize biases
biases.print(); // output: [0, 0, 0, 0, 0]

const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
biases.assign(updatedValues); // update values of biases
biases.print(); // output: [0, 1, 0, 1, 0]

//OPS
const d1 = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
const d_squared = d1.square();
d_squared.print();
// Output: [[1, 4 ],
//          [9, 16]]

// OPS 2
const e = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
const f = tf.tensor2d([[5.0, 6.0], [7.0, 8.0]]);

const e_plus_f = e.add(f);
e_plus_f.print();

// OPS 3
const sq_sum = e.add(f).square();
sq_sum.print();


// Dispose
const x = tf.tensor2d([[0.0, 2.0], [4.0, 6.0]]);
const x_squared = x.square();

x.dispose();
x_squared.dispose();

// Tidy
// tf.tidy takes a function to tidy up after
const average = tf.tidy(() => {
    // tf.tidy will clean up all the GPU memory used by tensors inside
    // this function, other than the tensor that is returned.
    //
    // Even in a short sequence of operations like the one below, a number
    // of intermediate tensors get created. So it is a good practice to
    // put your math ops in a tidy!
    const y = tf.tensor1d([1.0, 2.0, 3.0, 4.0]);
    const z = tf.ones([4]);
  
    return y.sub(z).square().mean();
  });
  
  average.print() // Output: 3.5
*/