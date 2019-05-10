class MyPromise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new Error('Executor must be a function');
    }
  
    // Internal state. `$state` is the state of the promise, and `$chained` is
    // an array of the functions we need to call once this promise is settled.
    this.$state = 'PENDING';
    this.$chained = [];
  
    // Implement `resolve()` and `reject()` for the executor function to use
    const resolve = res => {
      // A promise is considered "settled" when it is no longer
      // pending, that is, when either `resolve()` or `reject()`
      // was called once. Calling `resolve()` or `reject()` twice
      // or calling `reject()` after `resolve()` was already called
      // are no-ops.
      if (this.$state !== 'PENDING') {
        return;
      }
      // There's a subtle difference between 'fulfilled' and 'resolved'
      // that you'll learn about later.
      this.$state = 'FULFILLED';
      this.$internalValue = res;
      // If somebody called `.then()` while this promise was pending, need
      // to call their `onFulfilled()` function
      for (const { onFulfilled } of this.$chained) {
        onFulfilled(res);
      }
    };
    const reject = err => {
      if (this.$state !== 'PENDING') {
        return;
      }
      this.$state = 'REJECTED';
      this.$internalValue = err;
      for (const { onRejected } of this.$chained) {
        onRejected(err);
      }
    };
  
    // Call the executor function with `resolve()` and `reject()` as in the spec.
    try {
      // If the executor function throws a sync exception, we consider that
      // a rejection. Keep in mind that, since `resolve()` or `reject()` can
      // only be called once, a function that synchronously calls `resolve()`
      // and then throws will lead to a fulfilled promise and a swallowed error
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.$state === 'FULFILLED') {
      onFulfilled(this.$internalValue);
    } else if (this.$state === 'REJECTED') {
      onRejected(this.$internalValue);
    } else {
      this.$chained.push({ onFulfilled, onRejected });
    }
  }
}

const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // call either resolve or reject based on your logic
    resolve('resolved ...');
  }, 100);
});

myPromise.then(res => {
  console.log(res);
}, error => {
  console.log(error);
});
  