const idList = [
    "squares", 
    "frame", 
    "smiley", 
    "triangles",
    "arcs",
    "bezier",
    "cubic",
    "geometry",
    "path",
    "pallette",
    "circles",
    "radial",
    "rectangles",
    "lines"
];

function populate() {
    for (const id of idList) {
        const canvas = document.createElement("canvas");
        canvas.setAttribute("width", "150");
        canvas.setAttribute("height", "150");
        canvas.setAttribute("id", id);
        document.body.appendChild(canvas);
    }
}

function draw() {
    for (const id of idList) {
        const canvas = document.getElementById(id);
        const ctx = canvas.getContext("2d");
        switch (id) {
            case "squares":
                ctx.fillStyle = "rgb(200 0 0)";
                ctx.fillRect(10, 10, 50, 50);
                ctx.fillStyle = "rgb(0 0 200 / 50%)";
                ctx.fillRect(30, 30, 50, 50);
                break;

            case "frame":
                ctx.fillRect(25, 25, 100, 100);
                ctx.clearRect(45, 45, 60, 60);
                ctx.strokeRect(50, 50, 50, 50);
                break;

            case "smiley":
                ctx.beginPath();
                ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
                ctx.moveTo(110, 75);
                ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
                ctx.moveTo(65, 65);
                ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
                ctx.moveTo(95, 65);
                ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
                ctx.stroke();
                break;

            case "triangles":
                ctx.beginPath();
                ctx.moveTo(25, 25);
                ctx.lineTo(105, 25);
                ctx.lineTo(25, 105);
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(125, 125);
                ctx.lineTo(125, 45);
                ctx.lineTo(45, 125);
                ctx.closePath();
                ctx.stroke();
                break;

            case "arcs":
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        ctx.beginPath();
                        const x = 25 + j * 50;
                        const y = 25 + i * 50;
                        const radius = 20;
                        const startAngle = 0;
                        const endAngle = Math.PI + (Math.PI * j) / 2;
                        const conterClockWise = i % 2 !== 0;

                        ctx.arc(x, y, radius, startAngle, endAngle, conterClockWise);

                        if (i > 1) {
                            ctx.fill();
                        } else {
                            ctx.stroke();
                        }
                    }
                }
                break;

            case "bezier":
                ctx.beginPath();
                ctx.moveTo(75, 25);
                ctx.quadraticCurveTo(25, 25, 25, 62.5);
                ctx.quadraticCurveTo(25, 100, 50, 100);
                ctx.quadraticCurveTo(50, 120, 30, 125);
                ctx.quadraticCurveTo(60, 120, 65, 100);
                ctx.quadraticCurveTo(125, 100, 125, 62.5);
                ctx.quadraticCurveTo(125, 25, 75, 25);
                ctx.stroke();
                break;

            case "cubic":
                ctx.beginPath();
                ctx.moveTo(75, 40);
                ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
                ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
                ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
                ctx.fill();
                break;

            case "geometry":
                ctx.moveTo(0, 0);
                ctx.lineTo(150, 0);
                ctx.lineTo(75, 130);

                ctx.moveTo(75, 20);
                ctx.lineTo(50, 60);
                ctx.lineTo(100, 60);

                ctx.fill();
                break;

            case "path":
                const rectangle = new Path2D();
                rectangle.rect(10, 10, 50, 50);

                const circle = new Path2D();
                circle.arc(100, 35, 25, 0, 2 * Math.PI);

                ctx.stroke(rectangle);
                ctx.fill(circle);
                break;

            case "pallette":
                for (let i = 0; i < 6; i++) {
                    for (let j = 0; j < 6; j++) {
                        ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)},
                        ${Math.floor(255 - 42.5 * j)}, 0)`;
                        ctx.fillRect(j * 25, i * 25, 25, 25);
                    }
                }
                break;

            case "circles":
                for (let i = 0; i < 6; i++) {
                    for (let j = 0; j < 6; j++) {
                        ctx.strokeStyle = `rgb(0 ${Math.floor(255 - 42.5 * i)},
                        ${Math.floor(255 - 42.5 * j)})`;
                        ctx.beginPath();
                        ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, 2 * Math.PI, true);
                        ctx.stroke();
                    }
                }
                break;

            case "radial":
                ctx.fillStyle = "#FD0";
                ctx.fillRect(0, 0, 75, 75);
                ctx.fillStyle = "#6C0";
                ctx.fillRect(75, 0, 75, 75);
                ctx.fillStyle = "#09F";
                ctx.fillRect(0, 75, 75, 75);
                ctx.fillStyle = "#F30";
                ctx.fillRect(75, 75, 75, 75);
                ctx.fillStyle = "#FFF";

                ctx.globalAlpha = 0.2;

                for (let i = 0; i < 7; i++) {
                    ctx.beginPath();
                    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
                    ctx.fill();
                }
                break;

            case "rectangles":
                ctx.fillStyle = "rgb(255 221 0)";
                ctx.fillRect(0, 0, 150, 37.5);
                ctx.fillStyle = "rgb(102 204 0)";
                ctx.fillRect(0, 37.5, 150, 37.5);
                ctx.fillStyle = "rgb(0 153 255)";
                ctx.fillRect(0, 75, 150, 37.5);
                ctx.fillStyle = "rgb(255 51 0)";
                ctx.fillRect(0, 112.5, 150, 37.5);

                for (let i = 0; i < 10; i++) {
                    ctx.fillStyle = `rgb(255 255 255 / ${(i + 1) / 10})`;
                    for (let j = 0; j < 4; j++) {
                        ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
                    }
                }
                break;

            case "lines":
                for (let i = 0; i < 10; i++) {
                    ctx.lineWidth = i + 1;
                    ctx.beginPath();
                    ctx.moveTo(5 + i * 14, 5);
                    ctx.lineTo(5 + i * 14, 140);
                    ctx.stroke();
                }
        }
    }
}

populate();
draw();