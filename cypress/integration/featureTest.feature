@TestCases
Feature: Critical features test

    Navigate to the pages
    Verify the critical features
    
    @test
    Scenario: Navigate to the pages
        Given user navigate to instamotion url
        Then user accept cookies  
        Then user maximize the window
        When user verify the title
        Then user click features page
        Then user verify the the feature page
    @test
    Scenario: Verify find your financing feature
        Then verify Find your financing text
    @test
    Scenario: Verify Approval - without stress feature
        Then verify Approval - without stress text
    @test
    Scenario: Verify Delivery to your doorstep feature
        Then verify Delivery to your doorstep text