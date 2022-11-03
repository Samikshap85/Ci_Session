const { Given, When, Then } = require("@cucumber/cucumber");

Given("the user has navigated to the login page", async function () {
  console.log("The user has navigated to the login page");
  await page.goto("https://www.google.com");
  await page.pause();
});

When("the user enters valid {string} and {string}", function (email, password) {
  const validEmail = "samiksha@gmail.com";
  if (validEmail !== email) {
    throw new Error(
      "Expected email is" +
        " " +
        validEmail +
        " " +
        "got email is" +
        " " +
        email
    );
  }
  if (password !== "samiksha") {
    throw new Error("Password is invalid");
  }
});

Then("the home page should be displayed on the webUI", function () {
  console.log("The user enters ");
});

When(
  "the user enters email address as {string} and {string}",
  function (invalidemail, password) {
    console.log("when line");
  }
);

Then("the error {string} should pop", function (string) {
  console.log("then line");
});

When("the user logins with following valid credential", function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  //return 'pending';
  const dataArray = dataTable.hashes();
  //console.log(dataArray);

  //   for (i = 0; i < dataArray.length; i++) {
  //     const individualData = dataArray[i];
  //     const email = individualData.email;
  //     const password = individualData.password;
  //     console.log(
  //       `The email for user is ${i + 1} is ${email} and password is ${password}`
  //     );
  //   }

  dataArray.forEach((individualData) => {
    console.log("Email is: ", individualData.email);
    console.log("Password is: ", individualData.password, "\n\n\n\n");
  });

  //   while (dataArray.length > 0) {
  //     const individualData = dataArray.pop();
  //     console.log(individualData);
  //   }
});
