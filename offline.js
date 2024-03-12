let message = document.getElementsByClassName("message")[0];

let messageOnline = () => {
    message.textContent = "You Are Online";
}

let messageOffline = () => {
    message.textContent = "Please connect to internet";
}

if (window.navigator.onLine) {
    messageOnline();
    console.log("");
} else {
    messageOffline();
    console.log("Offline");
}
