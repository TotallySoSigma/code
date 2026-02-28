class Person {
    constructor(name, originFloor, destinationFloor) {
        this.name = name;
        this.originFloor = originFloor;
        this.destinationFloor = destinationFloor;
    }
    equals(person) {//determine if it's the same person
        return this.name == person.name;
    }
}
class Queue {
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
    constructor() {
        this.UP = 100;
        this.DOWN = 200;
    }
}
let DIRECTION = new Direction();
console.assert(DIRECTION.UP === 100 && DIRECTION.DOWN === 200);
class Floor {
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
class Elevator {
    constructor(capacity, floors) {
        this.capacity = capacity;//# of people
        this.floors = floors;
        this.queue = new ElevatorQueue();
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
            return DIRECTION.DOWN;
        } else if (nextDestination > this.currentFloor) {
            return DIRECTION.UP;
        } else {
            return null;
        }
    }
    unloadPeople() {
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].destinationFloor === this.currentFloor) {
                delete this.queue[i];
            }
        }
    }
    loadPeople() {
        let currFloorQueue = this.floors[this.currentFloor].queue;
        if (this.queue.length < this.capacity) {
            for (let i = 0; i < currFloorQueue.length; i++) {
                if ((currFloorQueue[i].destinationFloor > currentfloor && this.getNextDirection() == UP) ||
                    (currFloorQueue[i].destinationFloor < currentfloor && this.getNextDirection() == DOWN)) {
                    this.queue.enqueue(currFloorQueue[i]);
                    delete currFloorQueue[i];
                    return true;
                }
            }
        }
        return false;
    }
    moveAndLoad() {
        this.unloadPeople();
        this.loadPeople();
        this.getNextDestinationFloor();
    }
}
class RegularElevator extends Elevator {
    constructor(floors) {
        super();
        this.floors = floors;
        this.capacity = 4;
    }
}
class Building {
    constructor(numElevators, numFloors) {
        this.numElevators = numElevators;
        this.numFloors = numFloors; // 10
        this.floors = [];
        for (let i = 0; i < numFloors; i++) {
            this.floors.push(new Floor(i));
        }
        this.elevators = new Array(numElevators).fill(new RegularElevator(this.floors));
    }
    moveElevatorsAndLoad() {
        for (let i = 0; i < this.elevators.length; i++) {
            this.elevators[i].moveAndLoad();
        }
    }
    getNumberOfFloors() {
        return floors;
    }
    getFloor(floorNumber) {
        return this.floors[floorNumber - 1];
    }
    generatePeopleRandomly(numPeople) {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        for (let i = 0; i < numPeople; i++) {
            for (let j = 0; j < this.numFloors; j++) {
                this.floors[j].addPerson(new Person("Moo", getRandomInt(0, this.numFloors), getRandomInt(0, this.numFloors)));
            }
        }
    }
}//

class Simulation {//unfinished
    constructor(numElevators, numFloors, peoplePerSecond, canvas) {
        this.numElevators = numElevators;
        this.numFloors = numFloors;
        this.peoplePerSecond = peoplePerSecond;
        this.canvas = canvas;
        this.timer = 0;
        this.isRunning = false;
        this.ctx = canvas.getContext('2d');
        this.building = new Building(numElevators, numFloors);
    }
    step() {
        this.building.generatePeopleRandomly(this.peoplePerSecond);
        for (let i = 0; i < this.numFloors; i++) {
            this.building.floors[i].pressButtons();
        }
        this.animate();
        this.pause();
        this.isRunning = !this.isRunning;
    }
    toggleRun() {        
        if (this.isRunning) {
            this.pause();
        } else {
            this.run();
        }
        this.isRunning = !this.isRunning;
    }
    run() {
        this.intervalId = setInterval(() => {
            this.step();
        }, 1000);
    }
    pause() {
        clearInterval(this.intervalId);
    }
    animate() {
        console.clear();
        console.log(this.timer);
        for (let i = 0; i < this.numElevators; i++) {
            console.log(`Elevator ${i}'s floor: ${this.building.elevators[i].currentFloor}`);
            console.log(`Elevator ${i}'s queue: ${JSON.stringify(this.building.elevators[i].queue)}`);
        }
        for (let j = 0; j < this.numFloors; j++) {
            console.log(`Floor ${j}'s queue: ${JSON.stringify(this.building.floors[j].queue)}`);
        }
    }
    animateCanvas() {//not required
        //renders sim on canvas
    }
}






//export const building = new Building();
//
//let f = new Floor(0);
//let p = new Person("a", 0, 1);
//f.addPerson(p);
//console.assert(f.floorNumber === 0 && f.queue.isEmpty() === true, 'Test 1 failed');
//console.log(f.pressButtons());
//console.assert(f.upButtonPressed === true && f.downButtonPressed === false, 'Test 2 failed');
//let p = new Person("a", 0, 2);
//console.assert(p.name === "a" && p.originFloor === 0 && p.destinationFloor === 2, "Test 3 failed");
//let p1 = new Person("a", 0, 1);
//let p2 = new Person("a", 1, 2);