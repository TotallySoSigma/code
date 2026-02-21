import { building } from "./elevator.js";

export class Person {
    constructor(name, originFloor, destinationFloor) {
        this.name = name;
        this.originFloor = originFloor;
        this.destinationFloor = destinationFloor;
    }
    equals(person) {//determine if it's the same person
        return this.name == person.name;
    }
}

export class Queue {
    constructor() {
        this.queue = []; // queue of people
    }
    getQueueItems() {
        return this.queue;
    }

    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length == 0;
    }
    size() {
        return this.queue.length;
    }
}

class FloorQueue extends Queue {
    constructor() {
        super();

    }
    dequeueNextWithDestinationAbove(floor) {
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].destinationFloor > floor) {
                let person = this.queue[i];
                delete this.queue[i];
                return person;
            }
        }
        return null;
    }
    dequeueNextWithDestinationBelow(floor) {
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].destinationFloor < floor) {
                let person = this.queue[i];
                delete this.queue[i];
                return person;
            }
        }
        return null;
    }
}
class ElevatorQueue extends Queue {
    constructor() {
        super();
    }
    dequeue(floor) {
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].destinationFloor === floor) {
                let person = this.queue[i];
                delete this.queue[i];
                return person;
            }
        }
        return null;
    }
}

class Direction {
    UP() {
        return 100;
    }
    DOWN() {
        return 200;
    }
}
let DIRECTION = new Direction();
console.assert(DIRECTION.UP() === 100 && DIRECTION.DOWN() === 200);

export class Floor {//maybe finished
    constructor(floorNumber) {
        this.queue = new FloorQueue();
        this.floorNumber = floorNumber;
        this.upButtonPressed = false;
        this.downButtonPressed = false;
    }
    getPeopleOnFloor() {//returns a list of people
        return this.queue.size();
    }
    getFloorNumber() {
        return this.floorNumber;
    }
    addPerson(person) {
        this.queue.enqueue(person);
    }
    removePerson(person) {
        //this.queue.dequeue(person);
    }
    pressButtons() {
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].destinationFloor > this.floorNumber) {
                this.upButtonPressed = true;
            } else {
                this.upButtonPressed = false;
            }
            if (this.queue[i].destinationFloor < this.floorNumber) {
                this.downButtonPressed = true;
            } else {
                this.downButtonPressed = false;
            }
        }
    }
}

export class Elevator {
    constructor(capacity, floors) {
        this.capacity = capacity;//# of people
        this.floors = floors;

        this.queue = [];
        this.currentFloor = 0;
        this.destinationFloor = -1;
    }
    isFull() {
        return this.queue.length === this.capacity;
    }
    move() {
        if (this.currentFloor === this.destinationFloor) {
            return false;
        } else if (this.currentFloor < this.destinationFloor) {
            this.currentFloor++;
        } else {
            this.currentFloor--;
        }
        return true;
    }
    getNextDestinationFloor() {
        if (this.queue.length === 0) {
            let closestDestination = -1;
            for (let i = 0; i < this.floors.length; i++) {
                if (this.floors[i].upButtonPressed || this.floors[i].downButtonPressed) {
                    if (closestDestination != -1) {
                        closestDestination = Math.min(Math.abs(this.floors[i].floorNumber - this.currentFloor), closestDestination);
                    } else {
                        closestDestination = this.floors[i].floorNumber;
                    }
                }
            }
        } else {
            let closestDestination = this.queue[0].destinationFloor;
            for (let i = 1; i < this.queue.length; i++) {
                closestDestination = Math.min(this.queue[i].destinationFloor - this.currentFloor, closestDestination);
            }
        }
        return closestDestination;
    }
    getNextDirection() {
        let nextDestination = this.getNextDestinationFloor();
        if (nextDestination < this.currentFloor) {
            return DIRECTION.DOWN();
        } else if (nextDestination > this.currentFloor) {
            return DIRECTION.UP();
        } else {
            return;
        }
    }
}