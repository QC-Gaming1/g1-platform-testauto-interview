Feature: Interview

    This is where you will find and define test scenarios

    # This feature file contains the steps definitions of several exercises you'll need to do

    # Each test in an exercises. In the first exercises you'll only need to complete existing tests
    # and in the last ones, you'll have to write full test cases.

    # All documentation you'll need can be found in the README.md file, so take your time to read it.
    # To run the tests use the command "yarn e2e"

    # Do this test as it was a professional project: Be careful about the naming of your variables and functions,
    # your code structure, ...

    # Do not directly clone the project, create a fork on your own account (don't forget to make it public)

    # After the test starts, you have two hours and half to complete the test.
    # At the end of the test, either you send the following files to your project to Dominique Pino (dominique.pino@gaming1.com):
    # interview.feature, pageModel.ts interview.ts (and any other files you would have created). If ts files are not accepted byt
    # mail change their extension into "txt".
    # Or you can fork the project and send the link of your repository (don't forget to make it public)
    # Don't forget to remove your credentials from the configuration.ts file

    # Task 1: Add a test case for twitter
    Scenario Outline: Open <website>
        # This test has no Given step, which means there is no prerequisites
        # for the test to be able to perform the main actions
        When the user navigates to <website>
        Then <website> should be displayed

        Examples:
            | website  |
            | google   |
            | facebook |

    # The next two tests will target the website of your choice (github is recommended).
    # You can put the credentials used for your test in the configuration.ts file.
    # When you send the files back, don't send the configuration.ts, only specify the url of the used website
    # Hint : Use something else than a check on the URL

    # Task 2: Implement the following test
    Scenario: "My website - Open login form"
        Given the user opened my website
        When the user opens the login form
        Then the login form should be displayed

    # Task 3: Write and implement a test to check a successful login
    Scenario: My site - User successful login
        Then Implement the test

    # Task 4a: Create scenario to check the following behavior :
    # On the website https://www.luckygames.be/, when a LOGGED OFF user goes to the TOURNAMENTS page
    # there should be AT LEAST 1 tournament displayed on the CURRENT AND UPCOMING page
    #
    # Task 4b: Based on your previous scenario, create a scenario to check the following behavior:
    # On the website https://www.luckygames.be/, when a LOGGED OFF user goes to the TOURNAMENTS page
    # there should be AT LEAST 1 FINISHED tournament displayed on the FINISHED tournament page
    #
    # Hint:
    #   - On luckygames many element have a unique data-testid which can be used to easily identify them. Check "getByTestId"
    #   - Playwright doesn't allow visibility checks on locator which matches several elements
    #     Check the function ".nth()"
    Scenario: Name of your scenario
        Then Implement the test

    # Task 5: Using "fetch" from "node-fetch", and this api endpoint:http://fakerestapi.azurewebsites.net/api/v1/Books
    # Get the list of books and return a string containing those information for each book:
    # Book: title (Published: publishDate) in ascending order on publishDate and with one book per line
    Scenario: Name of your scenario
        Then Implement the test

