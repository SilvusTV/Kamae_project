"use strict";
const Datas = [
    {
        "title": "Introduction Cybersécurité",
        "category": "Cybersécurité",
        "status": "Victoire",
        "id": "0"
    },
    {
        "title": "Protéger son WiFi personnel",
        "category": "À la maison",
        "status": "A commencer",
        "id": "1"
    },
    {
        "title": "Je reconnais des données personnelles",
        "category": "RGPD",
        "status": "A commencer",
        "id": "2"
    },
    {
        "title": "Reconnaître un mail de phishing",
        "category": "Cybersécurité",
        "status": "Défaite",
        "id": "3"
    },
    {
        "title": "Bien utiliser son smartphone",
        "category": "A la maison",
        "status": "A commencer",
        "id": "4"
    },
    {
        "title": "Choisir un mot de passe invincible",
        "category": "Cybersécurité",
        "status": "A commencer",
        "id": "5"
    },
    {
        "title": "Limiter mon empreinte numérique",
        "category": "A la maison",
        "status": "A commencer",
        "id": "6"
    },
    {
        "title": "Pourquoi le RGPD est important",
        "category": "RGPD",
        "status": "A commencer",
        "id": "7"
    },
    {
        "title": "Introduction RGPD",
        "category": "RGPD",
        "status": "Défaite",
        "id": "8"
    }
];
let sortedStatus = Datas.sort((a, b) => (a.status < b.status) ? -1 : 1);
sortedStatus.forEach(function (value) {
    const courses = document.getElementById("courses");
    if (value.category === "Cybersécurité") {
        var category = "cyber";
    }
    else if (value.category == "A la maison") {
        var category = "remote";
    }
    else {
        var category = "rgpd";
    }
    if (value.status === "Victoire") {
        var button = "<button class=\"success\">Victoire</button>";
    }
    else if (value.status === "Défaite") {
        var button = "<span class='button' id='b-" + value.id + "'><p class='b-error'>Défaite •</p><button onclick='VorD(" + parseInt(value.id) + ")'>Go !</button></span>";
    }
    else {
        var button = "<span class='button' id='b-" + value.id + "'><p class='b-waiter'>À commencer •</p><button onclick='VorD(" + parseInt(value.id) + ")'>Go !</button></span>";
    }
    if (courses) {
        courses.innerHTML +=
            "<div class=\"task\">" +
                "<span class=\"task-txt\">" +
                "<p class=\"title\">" + value.title + "</p>" +
                "<p class=\"category " + category + "\">" + value.category + "</p>" +
                "</span>" +
                button +
                " </div>";
    }
});
function VorD(id) {
    var _a;
    let data = (_a = Datas.find(x => parseInt(x.id) === id)) === null || _a === void 0 ? void 0 : _a.title;
    const random = Math.round(Math.random());
    const querySelector = document.getElementById("b-" + id + "");
    if (random == 0) {
        if (querySelector) {
            querySelector.innerHTML = "<p class='b-error'>Défaite •</p><button onclick='VorD(" + id + ")'>Go !</button>";
        }
    }
    else {
        if (querySelector) {
            querySelector.innerHTML = "<button class=\"success\">Victoire</button>";
        }
    }
}
