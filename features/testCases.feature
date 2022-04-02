@TestCases
Feature: Crutucal features test

    Navigate to the pages
    Verify the critical features

    Background: Navigate to the pages
        Given user navigate to instamotion url
        When user verify the title
        Then user click features page
        And user verify the the feature page

    Scenario: Verify find your financing feature
        Then verify "Find yout financing" text

    Scenario: Verify Approval - without stress feature
        Then verify "Approval - without stress" text

    Scenario: Verify Delivery to your doorstep feature
        Then verify "Delivery to your doorstep" text