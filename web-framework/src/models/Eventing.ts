type Callback = () => void;

export class Eventing {
  events: { [event: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    //const handlers =
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((cb) => cb());
  };
}
