Feature: Home Page 

    Get homepage
    finally select Brand

    Scenario: Choose Brand
        Given user navigate to instamotion url
        When user validates the title
        Then user clicks on dropdown
        And user selects a brand from dropdown
        And enter userName "hridoy" on email