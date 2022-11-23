Feature: Technical test
    This is where you will find and define scenarios

    # The first thing to do is start the tests to see what happens

    # Task 1a: fix test for Facebook
    # Task 1b: add Twitter to the run
    Scenario Outline: Open <site>
        # no prerequisites, this can happen
        When the user navigates to <site>
        Then <site> should be displayed

        Examples:
            | site     |
            | google   |
            | facebook |

    # Task 2: implement this scenario for a site of your choice
    Scenario: My site - open login form
        Given the user opened my site
        When the user opens the login form
        Then the login form should be displayed

    # Task 3: write and implement this scenario FROM SCRATCH (set VALID
    # credentials in configuration.json)
    # Tips: Don't use roles
    Scenario: My site - user successful login
        Then implementz me pliz

    # Task 4: write a test that depends on a successful login as a prerequisite
    Scenario: My site - Test to determine
        Then implementz me pliz

    # Task 5: Luckygames - go to Tournaments and check that AT LEAST one
    # tournament is available, using testids
    Scenario: Luckygames - Tournament timeline
        Then implementz me pliz