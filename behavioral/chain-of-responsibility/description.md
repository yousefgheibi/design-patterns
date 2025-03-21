# Chain of Responsibility Design Pattern

**Intent**:  
Allow multiple objects to handle a request without the sender needing to know which object will process it by passing the request along a chain of handlers.

---

## Problem

- Need to process requests in a decoupled manner where multiple handlers may handle the request.
- Avoid hardcoded conditional statements that determine the handler.
- Allow dynamic modification of the chain of processing.

## Solution

The Chain of Responsibility pattern allows multiple objects to process a request. Each handler in the chain either processes the request or passes it to the next handler.

---

## Implementation Steps

### 1. Define a Handler Interface

The Handler interface declares a method for processing requests and a reference to the next handler in the chain.

### 2. Implement Concrete Handlers

Concrete Handlers process requests they are responsible for and pass unhandled requests to the next handler.

### 3. Define a Request Class (Optional)

A request class encapsulates the details of the request being processed.

### 4. Build the Chain of Handlers

The client assembles the chain by linking handlers together.

### 5. Use the Chain in Client Code

The client sends requests to the first handler, and the request propagates through the chain until handled or rejected.

---

## Example Usage

Using the Chain of Responsibility pattern improves flexibility, allows dynamic modifications to the processing flow, and keeps request handling loosely coupled from the sender.
