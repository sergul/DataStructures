function rotateImage(m) {
    const n = m.length * m.length;
    let backups = {secondValue: 0, thirdValue: 0, fourthValue: 0};
    let poses = new Positions(new Position(0, 0), new Position(0, 0), new Position(0, 0), new Position(0, 0));
    let stepSize = m.length - 1;
    let startPosition = 0;
    let currentStep = 0;

    while(stepSize > 0) {
        poses.second.column = startPosition + stepSize;
        poses.second.row = poses.first.column;

        poses.third.column = poses.second.column - currentStep;
        poses.third.row = startPosition + stepSize;

        poses.fourth.column = startPosition;
        poses.fourth.row = (startPosition + stepSize) - currentStep;

        //backup second value
        backups.secondValue = m[poses.second.row][poses.second.column];
        
        //move first value to second
        m[poses.second.row][poses.second.column] = m[poses.first.row][poses.first.column];

        //backup third value
        backups.thirdValue = m[poses.third.row][poses.third.column];
        
        //move second value to third
        m[poses.third.row][poses.third.column] = backups.secondValue;

        //backup third value
        backups.fourthValue = m[poses.fourth.row][poses.fourth.column];

        //move third value to fourth
        m[poses.fourth.row][poses.fourth.column] = backups.thirdValue;

        //move fourth value to first
        m[poses.first.row][poses.first.column] = backups.fourthValue;
        currentStep++;

        if (currentStep === stepSize) {
            poses.first.column = poses.first.row = ++startPosition;
            currentStep = 0;
            stepSize -=2;
        } else {
            poses.first.column ++;
        }
    }
    return m;
}

let matrix = generateInput(10000);
let res = rotateImage(matrix);
print(res);

function generateInput(n) {
    let matrix = [];
    let value = 0;
    for (let row = 0; row < n; ++row) {
        matrix.push([]);
        for (let column = 0; column < n; ++column) {
            matrix[row][column] = ++value;
        }
    }
    return matrix;
}

function print(arr) {
    for (let row of arr) {
        console.log(row.join(' '));
    }
    console.log('---------------');
}

function Positions(first, second, third, fourth) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.fourth = fourth;
}

function Position (row, column) {
    this.row = row;
    this.column = column;
}
    