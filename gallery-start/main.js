const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const srcs = [];
for (let i = 1; i < 6; i++) {
    srcs.push("pic" + i + ".jpg");
}

/* Declaring the alternative text for each image file */
const alts = [];
alts.push("child");
alts.push("waves");
alts.push("flowers");
alts.push("egyptian relief");
alts.push("butterfly");

/* Looping through images */

for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + srcs[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click", (event) => {
    event.stopPropagation();
    const targetImage = event.target.getAttribute("src");
    displayedImage.setAttribute("src", targetImage);
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (event) => {
    event.stopPropagation();
    let cls = event.target.getAttribute("class");
    if (cls.includes("dark")) {
        cls = "light";
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        cls = "dark";
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
    btn.setAttribute("class", cls);
});