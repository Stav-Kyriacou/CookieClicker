var cookie = {
    cookieType: "Chocolate Chip",
    cost: 0,
    count: 0,
    logMessage: "test log message",
    purchased: 0,
    perClick: 1,
    numUpgrades: 0,
    perSecond: 0
};

var upgrade1 = {
    cost: 10,
    perClickIncrease: 1,
    costIncrement: 5,
    level: 0,
    text: document.getElementById("Upgrade1Text")
};

var upgrade2 = {
    cost: 100,
    perClickIncrease: 5,
    costIncrement: 20,
    level: 0,
    text: document.getElementById("Upgrade2Text")
}

var upgrade3 = {
    cost: 10,
    perSecondIncrease: 1,
    costIncrement: 1,
    level: 0,
    text: document.getElementById("Upgrade3Text")
}

//-------------------PAGE LOAD-------------------------

var clickCount = 0;
var seconds = 0;


//cache html elements
var gameCount = document.getElementById("StatGameDuration");
var logUL = document.getElementById("LogUL");
var cookieCountText = document.getElementById("CookieCount");
var clickCountText = document.getElementById("StatClickCount");
var perClickText = document.getElementById("StatCookiesPerClick");
var perSecondText = document.getElementById("StatCookiesPerSecond");
var numUpgradesText = document.getElementById("StatNumUpgrades");
var totalCookiesEarnedText = document.getElementById("StatTotalCookiesEarned");


UpdateCounter();
setInterval(IncrementSeconds, 1000);


//-------------------FUNCTIONS------------------------

//track game duration
function IncrementSeconds() {
    seconds++;
    cookie.count += cookie.perSecond;
    gameCount.innerText = "Game Duration (seconds): " + seconds;
    UpdateCounter();
}

function ClickCookie() {
    cookie.count += cookie.perClick;
    UpdateCounter();
    IncrementClickCount();
}

function UpdateCounter() {
    cookieCountText.innerText = "Cookies: " + cookie.count;
    perClickText.innerText = "Cookies Per Click: " + cookie.perClick;
    perSecondText.innerText = "Cookies Per Second: " + cookie.perSecond;
    numUpgradesText.innerText = "Number of Upgrades: " + cookie.numUpgrades;
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
        upgrade1.level++;
        cookie.perClick += upgrade1.perClickIncrease;
        upgrade1.cost = 10 + (upgrade1.level * 2);
        upgrade1.text.innerText = "Level: " + upgrade1.level + "\nCost: " + upgrade1.cost;
        cookie.numUpgrades++;
        UpdateCounter();
        AddLogText("Purchased Upgrade 1");
    }
    else
    {
        UpgradePurchaseError(upgrade1.cost);
    }
}
function BuyUpgrade2() {
    if (cookie.count >= upgrade2.cost)
    {
        cookie.count -= upgrade2.cost;
        upgrade2.level++;
        cookie.perClick += upgrade2.perClickIncrease;
        upgrade2.cost = 100 + (upgrade2.level * 6);
        upgrade2.text.innerText = "Level: " + upgrade2.level + "\nCost: " + upgrade2.cost;
        cookie.numUpgrades++;
        UpdateCounter();
        AddLogText("Purchased Upgrade 2");
    }
    else
    {
        UpgradePurchaseError(upgrade2.cost);
    }
}
function BuyUpgrade3() {
    if (cookie.count >= upgrade3.cost)
    {
        cookie.count -= upgrade3.cost;
        upgrade3.level++;
        cookie.perSecond += upgrade3.perSecondIncrease;
        upgrade3.cost += upgrade3.costIncrement;
        upgrade3.text.innerText = "Level: " + upgrade3.level + "\nCost: " + upgrade3.cost;
        cookie.numUpgrades++;
        UpdateCounter();
        AddLogText("Purchased Upgrade 3");
    }
    else
    {
        UpgradePurchaseError(upgrade3.cost);
    }
}
function BuyUpgrade4() {
    cookie.count += 1000;
    UpdateCounter();
    AddLogText("Purchased Upgrade 4");
}

//Error message, tells you how many more cookies you need to afford the ugrade
function UpgradePurchaseError(cost)
{
    alert("You need " + (cost - cookie.count) + " more cookies to purchase that upgrade");
}