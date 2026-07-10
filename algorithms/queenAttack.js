/*
* Complete the 'queensAttack' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
* 1. INTEGER n (Rows & Columns on board)
* 2. INTEGER k (# of obstacles on board)
* 3. INTEGER r_q (Row that contains the queen)
* 4. INTEGER c_q (Column that contains the queen)
* 5. 2D_INTEGER_ARRAY obstacles (2d array containing positions of obstacles)
*/

function queensAttack(n, k, r_q, c_q, obstacles) {
    const allObstacles = new Set();
    for (let i = 0; i < obstacles.length; i++) {
        allObstacles.add(`${obstacles[i][0]},${obstacles[i][1]}`);
    }
    const directions = [
        [1, 0],   // up
        [-1, 0],  // down
        [0, 1],   // right
        [0, -1],  // left
        [1, 1],   // diagonally up & right
        [1, -1],  // diagonally up & left
        [-1, 1],  // diagonally down & right
        [-1, -1]  // diagonally down & left
    ];
    let attackableSquares = 0;
    for (let [row, column] of directions) {
        let currentRow = r_q + row;
        let currentColumn = c_q + column;
        while (currentRow >= 1 && currentRow <= n && currentColumn >= 1 && currentColumn <= n) {
            if (allObstacles.has(`${currentRow},${currentColumn}`) === true) {
                break;
            }
            attackableSquares++;
            currentRow += row;
            currentColumn += column;
        }
    }
    return attackableSquares;
}

function testing() {
    // Test Case 3: Queen in corner with obstacles blocking all directions
    function testCase3() {
        const n = 5;
        const k = 4;
        const r_q = 1;
        const c_q = 1;
        const obstacles = [[2, 1], [1, 2], [2, 2], [3, 3]];
        const expected = 12;
        const result = queensAttack(n, k, r_q, c_q, obstacles);
        console.log(`Test Case 3: ${result === expected ? 'PASS' : 'FAIL'} (Expected: ${expected}, Got: ${result})`);
    }

    // Test Case 4: Large board, queen in center, no obstacles
    function testCase4() {
        const n = 8;
        const k = 0;
        const r_q = 4;
        const c_q = 4;
        const obstacles = [];
        const expected = 27;
        const result = queensAttack(n, k, r_q, c_q, obstacles);
        console.log(`Test Case 4: ${result === expected ? 'PASS' : 'FAIL'} (Expected: ${expected}, Got: ${result})`);
    }

    // Test Case 5: Multiple obstacles in same direction
    function testCase5() {
        const n = 10;
        const k = 3;
        const r_q = 5;
        const c_q = 5;
        const obstacles = [[7, 5], [6, 5], [8, 5]];
        const expected = 35;
        const result = queensAttack(n, k, r_q, c_q, obstacles);
        console.log(`Test Case 5: ${result === expected ? 'PASS' : 'FAIL'} (Expected: ${expected}, Got: ${result})`);
    }

    // Test Case 6: Obstacle not in any queen direction (should be ignored)
    function testCase6() {
        const n = 6;
        const k = 1;
        const r_q = 3;
        const c_q = 3;
        const obstacles = [[5, 2]];
        const expected = 19;
        const result = queensAttack(n, k, r_q, c_q, obstacles);
        console.log(`Test Case 6: ${result === expected ? 'PASS' : 'FAIL'} (Expected: ${expected}, Got: ${result})`);
    }

    // Test Case 7: Queen at edge with obstacles
    function testCase7() {
        const n = 5;
        const k = 2;
        const r_q = 5;
        const c_q = 5;
        const obstacles = [[4, 4], [3, 3]];
        const expected = 12;
        const result = queensAttack(n, k, r_q, c_q, obstacles);
        console.log(`Test Case 7: ${result === expected ? 'PASS' : 'FAIL'} (Expected: ${expected}, Got: ${result})`);
    }

    // Test Case 8: Single square board (edge case)
    function testCase8() {
        const n = 1;
        const k = 0;
        const r_q = 1;
        const c_q = 1;
        const obstacles = [];
        const expected = 0;
        const result = queensAttack(n, k, r_q, c_q, obstacles);
        console.log(`Test Case 8: ${result === expected ? 'PASS' : 'FAIL'} (Expected: ${expected}, Got: ${result})`);
    }

    // Test Case 9: Obstacle immediately adjacent to queen
    function testCase9() {
        const n = 5;
        const k = 1;
        const r_q = 3;
        const c_q = 3;
        const obstacles = [[3, 4]];
        const expected = 16;
        const result = queensAttack(n, k, r_q, c_q, obstacles);
        console.log(`Test Case 9: ${result === expected ? 'PASS' : 'FAIL'} (Expected: ${expected}, Got: ${result})`);
    }

    // Your solution function
    function queensAttack(n, k, r_q, c_q, obstacles) {
        const obstacleSet = new Set();
        for (let obstacle of obstacles) {
            obstacleSet.add(`${obstacle},${obstacle}`);
        }

        const directions = [
            [1, 0], [-1, 0], [0, 1], [0, -1],
            [1, 1], [1, -1], [-1, 1], [-1, -1]
        ];

        let count = 0;

        for (let [dr, dc] of directions) {
            let r = r_q + dr;
            let c = c_q + dc;

            while (r >= 1 && r <= n && c >= 1 && c <= n) {
                if (obstacleSet.has(`${r},${c}`)) {
                    break;
                }
                count++;
                r += dr;
                c += dc;
            }
        }

        return count;
    }

    // Run all tests
    function runAllTests() {
        console.log("Running all test cases...\n");
        testCase3();
        testCase4();
        testCase5();
        testCase6();
        testCase7();
        testCase8();
        testCase9();
    }

    // Execute all tests
    runAllTests();
}
testing();