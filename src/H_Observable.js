/*export*/ class H_Observable {
  constructor(subscriberCallback) {
    if(subscriberCallback) {
      this._subscribe = subscriberCallback;
    }
  }

  _subscribe
}
