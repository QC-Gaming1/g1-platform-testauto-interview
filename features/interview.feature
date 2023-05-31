Feature: Interview

    This is where you will find and define scenarios

    # This feature file contains the steps definitions of several exercices you'll need to do

    # Each test in an exercices. In the first exercices you'll only need to complete existing tests
    # and in the last ones, you'll have to write full test cases.

    # All documentation you'll need can be found in the README.md file, so take your time to read it.
    # To run the tests use the command "yarn e2e"

    # Do this test as it was a professional project: Be careful about the naming of your variables and functions,
    # your code structure, ...

    # After all set up is done, you have two (2) hours to complete the test.
    # If you have any questions you can contact Dominique Pino (dominique.pino@gaming1.com)
    # At the end of the test, send your files to Dominique Pino (dominique.pino@gaming1.com)
    # The ".ts" files could be blocked by the mail provider, so it's recommended to change their extention to ".txt"
    # You need to send back the following fils : interview.feature, interview.ts, pageModel.ts

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

    # For the website of your choice (github is recommended), implement the task 2 and 3.
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
    #   - On luckygames many element have a unique data-testid which can be used to easily identify them
    #   - Playwright doesn't allow visibility checks on locator which matches several elements
    #     Check the function ".nth()"
    Scenario: Name of your scenario
        Then Implement the test

    # On the website https://www.circus.be/, on the registration form, when a user enters their birthdate and
    # then they click on the national number field, it should be auto filled with the information about this
    # birthdate with the following format : YY.DD.MM-
    #
    # Task 5a: Create a scenario which will check this behavior for a user being exactly 18 years old
    #
    # Task 5b: Based on the previous scenario add another one which checks the behavior for a user being 18 years old + 1 day
    #
    # Hint : You can share data between steps by saving them into "ITestController.parameters"
    Scenario: Name of your scenario
        Then Implement the test

