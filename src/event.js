import PubSub from "pubsub-js";

const initEventBus = () => {
  if (!window.PubSub) {
    window.PubSub = PubSub;
  }

  return window.PubSub;
};

export default initEventBus;
