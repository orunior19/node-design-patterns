const STATE = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECT: 'reject'
};

class NPromise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new Error('Executor must be a function');
    }

    this.state = STATE.PENDING;
    this.value = undefined;
    this.onFulFillChain = [];
    this.onRejectCallChain = [];

    executor(this.resolve.bind(this));
  }

  then(onFulfill) {
    return new NPromise(resolve => {
      resolve(onFulfill(this.value));
    });
  }

  resolve(res) {
    //uma promise não pode mudar o estado mais de uma vez já nasce com estado e se for diferente do esperado temos que retornar
    if(this.state !== STATE.PENDING){
      return
    }

    this.state = STATE.FULFILLED;
    this.value = res;
  }
}
module.exports = NPromise;