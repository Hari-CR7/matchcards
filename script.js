var card = $(".card");
var started = false;
var count = 0;
var check = [];
function shuffle() {
    var items = ["apj", "dualipa", "rohit", "ronaldo", "elon", "sundarpichai", "apj", "dualipa", "rohit", "ronaldo", "elon", "sundarpichai"];
    let currentIndex = items.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [items[currentIndex], items[randomIndex]] = [
            items[randomIndex], items[currentIndex]];
    }
    for (var i = 0; i < $(".card").length; i++) {
        var item = items[i];
        if (item === "apj" && !$(".c" + i).hasClass("closed")) {
            $(".c" + i).css("background-image", "url(./img/apj.jpg)");
            $(".c" + i).addClass(item);
        }
        else if (item === "ronaldo" && !$(".c" + i).hasClass("closed")) {
            $(".c" + i).css("background-image", "url(./img/ronaldo.jpg)");
            $(".c" + i).addClass(item);
        }
        else if (item === "dualipa" && !$(".c" + i).hasClass("closed")) {
            $(".c" + i).css("background-image", "url(./img/dualipa.jpg)");
            $(".c" + i).addClass(item);
        }
        else if (item === "elon" && !$(".c" + i).hasClass("closed")) {
            $(".c" + i).css("background-image", "url(./img/elon.png)");
            $(".c" + i).addClass(item);
        }
        else if (item === "sundarpichai" && !$(".c" + i).hasClass("closed")) {
            $(".c" + i).css("background-image", "url(./img/sundarpichai.jpg)");
            $(".c" + i).addClass(item);
        }
        else if (item === "rohit" && !$(".c" + i).hasClass("closed")) {
            $(".c" + i).css("background-image", "url(./img/rohit.jpg)");
            $(".c" + i).addClass(item);
        }
        else {
            console.log(i);
        }
    }
}
function allClose() {
    card.css("background-image", "url(./img/closed.jpg)");
}
function close(wrong) {
    $("." + wrong).css("background-image", "url(./img/closed.jpg)");
    $("." + wrong).addClass("closed");
}
function start() {
    if (started) {
        card.removeClass("closed");
        shuffle();
        setTimeout(function () {
            card.addClass("closed");
            allClose();
        }, 2000);
    }
}
$(document).keypress(function (event) {
    started = true;
    $("p").text("");
    start();
});
$(".start-btn").click(() => {
    started = true;
    $("p").text("");
    start();
    $(".start-btn").css("display", "none");
});

card.click(function () {
    if ($(this).hasClass("closed")) {
        count++;
        $(this).removeClass("closed");
        if ($(this).hasClass("apj")) {
            $(this).css("background-image", "url(./img/apj.jpg)");
            check.push("apj");
        }
        else if ($(this).hasClass("ronaldo")) {
            $(this).css("background-image", "url(./img/ronaldo.jpg)");
            check.push("ronaldo");
        }
        else if ($(this).hasClass("dualipa")) {
            $(this).css("background-image", "url(./img/dualipa.jpg)");
            check.push("dualipa");
        }
        else if ($(this).hasClass("elon")) {
            $(this).css("background-image", "url(./img/elon.png)");
            check.push("elon");
        }
        else if ($(this).hasClass("sundarpichai")) {
            $(this).css("background-image", "url(./img/sundarpichai.jpg)");
            check.push("sundarpichai");
        }
        else if ($(this).hasClass("rohit")) {
            $(this).css("background-image", "url(./img/rohit.jpg)");
            check.push("rohit");
        }
        else {
            console.log("Error occurred");
        }
        if (count % 2 === 0 && count > 0) {
            doCheck(check);
        }
        result(count);
    }
});
function doCheck(result) {
    if (result[0] === result[1]) {
        console.log("Great!");
    }
    else {
        close(result[0]);
        close(result[1]);
    }
    check = [];
}
function result(score) {
    if (!card.hasClass("closed")) {
        $("p").text("Attempts : " + score);
    }
}
