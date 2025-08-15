/*
    Given:
        type Event = "click" | "hover" | "focus";

    Create a type EventHandlerName for "onClick" | "onHover" | "onFocus" using Capitalize
*/
type Event = "click" | "hover" | "focus";

type EventHandlerName = `on${Capitalize<Event>}`;

const myEvent: Event = "click";
const myEventAction: EventHandlerName = `on${
  (myEvent.charAt(0).toUpperCase() + myEvent.slice(1)) as Capitalize<Event>
}`;

console.log(myEventAction);
