class EventManager {
    constructor() {
      this.events = {}; // Object to store events
    }
  
    // Subscribe method
    on(event, callback) {
      if (!this.events[event]) {
        // If the event is not registered, create an array for callbacks
        this.events[event] = []; 
      }
      // Add the callback with the bound context
      this.events[event].push(callback.bind(this));
    }
  
    // Unsubscribe method
    off(event, callback) {
    // If the event is not registered, do nothing
      if (!this.events[event]) return;
  
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  
    // Trigger method
    trigger(event, ...args) {
    // If the event is not registered, do nothing
      if (!this.events[event]) return;
  
      this.events[event].forEach(callback => {
        // Call all callbacks, passing the arguments
        callback(...args);
      });
    }
  }
  
  const manager = new EventManager();
  
  function handleEvent(message) {
    console.log(`${message} from ${this.constructor.name}`);
  }
  
  manager.on('greet', handleEvent);
  manager.trigger('greet', 'Hello');
  manager.off('greet', handleEvent);
  manager.trigger('greet', 'Hello again');