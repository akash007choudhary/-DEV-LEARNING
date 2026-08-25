const figlet= require("figlet");
figlet("akash", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        return;
    }

    console.log(data);
});

