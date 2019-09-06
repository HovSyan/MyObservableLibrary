// import {H_Observable} from "../src/H_Observable";

let obs1 = new H_Observable();
let obs2 = new H_Observable(subscriber => {
  subscriber.next(2);
  subscriber.complete();
});
