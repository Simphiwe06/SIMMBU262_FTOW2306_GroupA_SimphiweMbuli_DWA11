# Redux-Inspired Tally App State Management

This repository contains an implementation of a Redux-inspired state management system for a basic counting Tally App. The primary goal is to create a store that manages the state and allows for interactions through dispatched actions.

## User Stories

### Increment the Counter by One

**Scenario 1:**
- **Given:** No interactions have been performed yet.
- **When:** The "getState" method is run.
  - The result is logged to the console.
- **Then:** The state should show a count of 0.

**Scenario 2:**
- **Given:** No interactions have been performed yet.
- **When:** An "ADD" action is dispatched, and another "ADD" action is dispatched.
  - The browser console is open.
- **Then:** The state should show a count of 2.

**Scenario 3:**
- **Given:** The current count in the state is 2.
- **When:** A "SUBTRACT" action is dispatched.
  - The browser console is open.
- **Then:** The state should display a count of 1.

### Resetting the Tally Counter

**Scenario 4:**
- **Given:** The current count in the state is 1.
- **When:** A "RESET" action is dispatched.
  - The browser console is open.
- **Then:** The state should display a count of 0.
