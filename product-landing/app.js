const circle = document.querySelectorAll('.circle');
const phone = document.querySelector('.phone-collection');

for (let i = 0; i < circle.length; i++) {
    circle[i].onclick = function() {

        switch (circle[i].className) {
            case "circle circle-blue circle-shadow-default":
                phone.src = "./imgs/phone2.png";
                break;
            case "circle circle-pink circle-shadow-default":
                phone.src = "./imgs/phone3.png";
                break;
            case "circle circle-black circle-shadow-default":
                phone.src = "./imgs/phone1.png";
                break;
        }
    }
}