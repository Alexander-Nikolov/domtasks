var canvas = document.getElementById('canv');
var ctx = canvas.getContext('2d');

ctx.fillStyle = "skyblue";
ctx.fillRect(0, 0, 1000, 300);
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 1000, 700);


var riverX = 800;
var riverY = 299;
ctx.beginPath();
ctx.moveTo(riverX, riverY);
ctx.lineJoin = "round";
while (riverY <= 1000) {

    if (riverY % 2 == 0) {
        ctx.lineTo(riverX, riverY);
    } else {
        ctx.lineTo(riverX + 3, riverY);
    }

    riverY += 15;
}
riverY = 1000;

ctx.lineTo(riverX, riverY);
riverX -= 100;
ctx.lineTo(riverX, riverY);

while (riverY >= 299) {

    if (riverY % 2 == 0) {
        ctx.lineTo(riverX, riverY);
    } else {
        ctx.lineTo(riverX - 3, riverY);
    }

    riverY -= 15;
}
riverY = 299;
ctx.lineTo(riverX, riverY);
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();

function House(x, y, floors) {
    this.x = x;
    this.y = y;
    this.floors = floors;

    this.floorsWidth = 250;
    this.floorsHeigth = 200;

}


House.prototype.draw = function () {
    ctx.strokeRect(this.x, this.y, this.floorsWidth, this.floorsHeigth * this.floors);

    for (var index = 0; index < this.floors; index++) {
        ctx.fillStyle = "gray";
        ctx.fillRect(this.x, this.floorsHeigth * index + this.y, this.floorsWidth, this.floorsHeigth);

        var leftWindowPosX = (this.floorsWidth / 4) + this.x - 40;
        var leftWindowPosY = (this.floorsHeigth * index) + this.y + (this.floorsHeigth / 4);
        ctx.fillStyle = "yellow";
        ctx.fillRect(leftWindowPosX, leftWindowPosY, 40, 40);

        var rightWindowPosX = (this.floorsWidth - this.floorsWidth / 4) + (this.x);
        var rightWindowPosY = (this.floorsHeigth * index) + this.y + (this.floorsHeigth / 4);
        ctx.fillRect(rightWindowPosX, rightWindowPosY, 40, 40);

        if (this.floors == index + 1) {
            var doorPosX = (this.floorsWidth / 2) + (this.x) - 25;
            var doorPosY = (this.floorsHeigth * (index + 1)) + this.y - 100 ;
            ctx.fillStyle = "brown";
            ctx.fillRect(doorPosX, doorPosY, 50, 100);
        }

    }
    ctx.beginPath();
    ctx.moveTo(this.x - 10, this.y);
    ctx.lineTo(this.x + (this.floorsWidth / 2), this.y - (this.floorsHeigth / 2));
    ctx.lineTo(this.x + this.floorsWidth + 10, this.y);
    ctx.closePath();
    ctx.fillStyle = "firebrick";
    ctx.fill();
}

var house = new House(200, 200, 2);
house.draw();