const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class MyPromise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw Error(`Executor must be a function!!!`);
    }

    this.state = PENDING;

    const resolve = (result) => {
      this.state = FULFILLED;
    }

    const reject = (reason) => {
      this.state = REJECTED;
    }

    executor(resolve, reject);

    const then = (onFulfilled, onRejected) => {

    }
  }
}




const executor = (resolve, reject) => {
  setTimeout(() => {
    reject(`I'm failed`);
  }, 2000);
};

const myPromise = new MyPromise(executor);

const onFulfilled = (result) => {
  console.log(result);
}

const onRejected = (error) => {
  console.log(error);
}
myPromise.then(onFulfilled).catch(onRejected);
  