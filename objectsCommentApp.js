window.setTimeout(function () {
    var arrayOfaccounts = [];
    var numofComments = 0;

    var accounts = {
        id: undefined,
        comments: []
    };

    function addAccountManually(account) {
        var comm;
        account.id = prompt("Enter an account ID");
        comm = "Selam " + accounts.id;
        account.comments = [comm];
        arrayOfaccounts.push(account);
        account = new Object();
    }

    function createRandomAccounts(account) {
        var numOfaccounts = Number(prompt("Hoow many random accounts would you like to create?"));
        var sampleID = "randomAccount1";
        var sampleComment = "randomComment1";

        for (var i = 1; i <= numOfaccounts; i++) {

            account.id = sampleID;
            account.comments = [sampleComment];
            arrayOfaccounts.push(account);
            sampleID = sampleID.replace(i, i + 1);
            sampleComment = sampleComment.replace(i, i + 1);
            account = new Object();
        }
    }

    function displayAccounts(account) {
        arrayOfaccounts.forEach(function (item) {
            console.log(item);
        });
    }

    function deleteAccount(index) {
        arrayOfaccounts.splice(index, 1);
    }

    function findAccount(account, bool) {
        var findUser = prompt("Find user by ID (exmp : randomAccount1");
        var answer;
        arrayOfaccounts.forEach(function (item, index) {


            if (findUser === item.id) {

                if (bool === true) {
                    deleteAccount(bool);
                } else {

                    console.log(item.id);
                    answer = prompt("Would you like to Display comments for this account! (yes | no)");

                    if (answer === "yes") {

                        displayComments(index);
                        answer = prompt("Add Comments? (yes | no)");

                        if (answer === "yes") {
                            addComments(index);
                        }
                    }
                }
                bool = false;
            }

        });

    }

    function displayComments(index) {
        arrayOfaccounts[index].comments.forEach(function (comm, numOfcomms) {
            console.log("Comments: " + comm);
            numofComments++;
        });
    }

    function addComments(index) {
        answer = prompt("Write your comment");
        arrayOfaccounts[index].comments.push(answer);
        console.log("Comments: " + arrayOfaccounts[index].comments[numofComments]);
    }

    var userInput;
    var bool;

    while (userInput !== "quit") {

        bool = false;
        userInput = prompt("Choose action");

        if (userInput === "random") {
            createRandomAccounts(accounts);
            accounts = new Object();
        }
        if (userInput === "manual") {
            addAccountManually(accounts);
            accounts = new Object();
        }
        if (userInput === "list" && arrayOfaccounts.length > 0) {
            displayAccounts(accounts);
        }
        if (userInput === "find" && arrayOfaccounts.length > 0) {
            findAccount(accounts, bool);
        }
        if (userInput === "delete") {
            bool = true;
            findAccount(accounts, bool);
        }

    }
}, 5000);
