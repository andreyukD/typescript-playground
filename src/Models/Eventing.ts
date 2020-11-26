type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  // need arrow function to solve this issue console.log(user.get("name"));
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || []; // Callback[] or undefined
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
