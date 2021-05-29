
const body = document.querySelector("body"),
    imgContainer = document.querySelector(".js-changeImg"),
    imgBtn = imgContainer.querySelector("input");

const IMG_NUMBER = 2298;
const IMG_GRAYSCALE_LS = 'imgStatus';
let imgStatus = false;
let randomNumber;


function changeImgStatus(event) {
    const btn = event.target;
    imgStatus = (!JSON.parse(btn.value));


    console.log(`changeImgStatus에서1 ${!JSON.parse(btn.value)}`)
    console.log(`changeImgStatus에서2 ${imgStatus}`)
    
    
    btn.value = imgStatus;
    console.log(`changeImgStatus에서3 ${btn.value}`)
    saveImgStatus()
    paintImage(randomNumber);
    // setImgColor(imgStatus)
}

function saveImgStatus(){
    localStorage.setItem(IMG_GRAYSCALE_LS, imgStatus);
}

function setImgColor(image, imgStatus){
    imgStatus? image.filter = "grayscale()" : image.filter = "none";
}

/* TODO 5초마다 변경 */
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`
    setImgColor(image.style, imgStatus)
    console.log(`paintImage에서 ${imgStatus}`)
    // imgStatus? image.style.filter = "grayscale()" : image.style.filter = "none";
    image.classList.add('bgImage');
    body.appendChild(image)
    // body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function loadImgStatus() {
    const loadedImgStatus = localStorage.getItem(IMG_GRAYSCALE_LS)
    if (loadedImgStatus !== null) {
        imgStatus = JSON.parse(loadedImgStatus)
        imgBtn.value = imgStatus;
        console.log(`로드됨 ${imgStatus}`)
        console.log(`로드됨 ${imgBtn.value}`)
    }
}

function init() {
    randomNumber = genRandom();
    loadImgStatus();
    paintImage(randomNumber);
    imgBtn.addEventListener("click", changeImgStatus);
    console.log(`init에서 ${imgBtn.value}`)
}

init();