function subscriber(eventType: `${string}Event`) {
  console.log(`Handling ${eventType}`);
}

// Valid
subscriber('amazonEvent');
subscriber('alexaEvent');
subscriber('uberEvent');

// Invalid
// subscriber('uber');
// subscriber('zomato');

console.log();
