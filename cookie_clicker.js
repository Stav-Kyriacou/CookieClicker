var cookie = {
    cookieType: "Chocolate Chip",
    cost: 0,
    count: 0,
    logMessage: "test log message",
    purchased: 0,
    perClick: 1
};

var upgrade1 = {
    cost: 10,
    perClickIncrease: 1,
    costIncrement: 5,
    text: document.getElementById("Upgrade1Text")
};

var clickCount = 0;
var seconds = 0;


//caache html elements
var gameCount = document.getElementById("StatGameDuration");
var logUL = document.getElementById("LogUL");
var cookieCountText = document.getElementById("CookieCount");
var clickCountText = document.getElementById("StatClickCount");
var perClickText = document.getElementById("StatCookiesPerClick");


UpdateCounter();
setInterval(IncrementSeconds, 1000);


//track game duration
function IncrementSeconds() {
    seconds++;
    gameCount.innerText = "Game Duration (seconds): " + seconds;
}

function ClickCookie() {
    cookie.count += cookie.perClick;
    UpdateCounter();
    IncrementClickCount();
}

function UpdateCounter() {
    cookieCountText.innerText = "Cookies: " + cookie.count;
    perClickText.innerText = "Cookies Per Click: " + cookie.perClick;
}

function IncrementClickCount() {
    clickCount++;
    clickCountText.innerText = "Number of Clicks: " + clickCount;
}

//add log messages
function AddLogText(message) {
    cookie.logMessage = message;
    var li = document.createElement("li");
    var t = document.createTextNode(cookie.logMessage);

    li.appendChild(t);

    document.getElementById("LogUL").appendChild(li);
    document.getElementById("LogText").value = "";
    var span = documen.createElement("SPAN");
    li.appendChild(span);
}

//upgrade functions
function BuyUpgrade1() {
    if (cookie.count >= upgrade1.cost)
    {
        cookie.count -= upgrade1.cost;
        cookie.perClick += upgrade1.perClickIncrease;
        upgrade1.cost += upgrade1.costIncrement;
        upgrade1.text.innerText = "Cost: " + upgrade1.cost;
        UpdateCounter();
        AddLogText("Purchased Upgrade 1");
    }
}
function BuyUpgrade2() {
    AddLogText("Purchased Upgrade 2");
}
function BuyUpgrade3() {
    AddLogText("Purchased Upgrade 3");
}
function BuyUpgrade4() {
    AddLogText("Purchased Upgrade 4");
}