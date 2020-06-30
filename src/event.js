import PubSub from "pubsub-js";

export const initEventBus = () => {
  if (!window.PubSub) {
    window.PubSub = PubSub;
  }

  return window.PubSub;
};

export const EVENTS = {
  KEEP_PARAGRAPH_AFTER_REMOVED: "KEEP_PARAGRAPH_AFTER_REMOVED",
};
