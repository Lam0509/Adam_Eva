let Apple = function () {
    this.weight = 10;
    this.decrease = function () {
        this.weight--;
    }
    this.isEmpty = function () {
        if (this.weight > 0) {
            return false;
        } else {
            return true;
        }
    }
    this.getWeight = function () {
        return this.weight;
    }
}

let Human = function (name, gender, weight) {
    this.eatNum = 0;
    this.name = name;
    this.gender = gender;
    this.humanWeight = weight;
    this.say = function (message) {
        return message;
    }
    this.eat = function (Apple) {
        if (Apple.isEmpty() == false) {
            this.eatNum++;
            this.humanWeight++;
            Apple.decrease();
        } else {
            console.log('Không thể ăn thêm táo');
        }
    }
    this.checkApple = function (Apple) {
        Apple.getWeight();
    }
    this.getName = function () {
        return this.name;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.getWeight = function () {
        return this.humanWeight;
    }
    this.setWeight = function (weight) {
        this.humanWeight = weight;
    }
}

let Adam = new Human('Adam', 'male', 60);
let Eva = new Human('Eva', 'female', 50);
let apple = new Apple();

console.log(Adam.say('Hello Eva'));
console.log(Eva.say('Hello Adam'));

Adam.eat(apple);
console.log('Adam đã ăn ' + Adam.eatNum + ' quả táo');
console.log('Cân nặng của Adam lúc này là ' + Adam.getWeight());
console.log('Số quả táo lúc này là ' + apple.getWeight());

Eva.eat(apple);
console.log('Eva đã ăn ' + Eva.eatNum + ' quả táo');
console.log('Cân nặng của Eva lúc này là ' + Eva.getWeight());
console.log('Số quả táo lúc này là ' + apple.getWeight());

Adam.eat(apple);
Adam.eat(apple);
Adam.eat(apple);
Eva.eat(apple);
Eva.eat(apple);

console.log('Số quả táo lúc này là ' + apple.getWeight());
console.log('Cân nặng của Adam lúc này là ' + Adam.getWeight());
console.log('Cân nặng của Eva lúc này là ' + Eva.getWeight());

Adam.eat(apple);
Eva.eat(apple);
Eva.eat(apple);
console.log('Số quả táo lúc này là ' + apple.getWeight());
Eva.eat(apple);










