$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/SprintDemo.feature");
formatter.feature({
  "name": "To launch the browser and pass any URL",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To verify the login functionality by passing the invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to prepare all the prerequistie items",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to enter the url in browser",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass the invalid username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\" in login page",
  "keyword": "And "
});
formatter.step({
  "name": "User has to click the login button and verify the outcomes of the test datas",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "Abcd@123"
      ]
    },
    {
      "cells": [
        "def@gmail.com",
        "Efgh@456"
      ]
    },
    {
      "cells": [
        "ghi@gmail.com",
        "Ijkl@789"
      ]
    },
    {
      "cells": [
        "jkl@gmail.com",
        "Mnop@101112"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the login functionality by passing the invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to prepare all the prerequistie items",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_has_to_prepare_all_the_prerequistie_items()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter the url in browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_has_to_enter_the_url_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the invalid username \"abc@gmail.com\" and password \"Abcd@123\" in login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_has_to_pass_the_invalid_username_and_password_in_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button and verify the outcomes of the test datas",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_to_click_the_login_button_and_verify_the_outcomes_of_the_test_datas()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: user is in home page\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat qbrainx.stepDefinition.StepDefinition.user_has_to_click_the_login_button_and_verify_the_outcomes_of_the_test_datas(StepDefinition.java:47)\r\n\tat ✽.User has to click the login button and verify the outcomes of the test datas(file:src/test/resources/Features/SprintDemo.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To verify the login functionality by passing the invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to prepare all the prerequistie items",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_has_to_prepare_all_the_prerequistie_items()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter the url in browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_has_to_enter_the_url_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the invalid username \"def@gmail.com\" and password \"Efgh@456\" in login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_has_to_pass_the_invalid_username_and_password_in_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button and verify the outcomes of the test datas",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_to_click_the_login_button_and_verify_the_outcomes_of_the_test_datas()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: user is in home page\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat qbrainx.stepDefinition.StepDefinition.user_has_to_click_the_login_button_and_verify_the_outcomes_of_the_test_datas(StepDefinition.java:47)\r\n\tat ✽.User has to click the login button and verify the outcomes of the test datas(file:src/test/resources/Features/SprintDemo.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To verify the login functionality by passing the invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to prepare all the prerequistie items",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_has_to_prepare_all_the_prerequistie_items()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter the url in browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_has_to_enter_the_url_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the invalid username \"ghi@gmail.com\" and password \"Ijkl@789\" in login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_has_to_pass_the_invalid_username_and_password_in_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button and verify the outcomes of the test datas",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_to_click_the_login_button_and_verify_the_outcomes_of_the_test_datas()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: user is in home page\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat qbrainx.stepDefinition.StepDefinition.user_has_to_click_the_login_button_and_verify_the_outcomes_of_the_test_datas(StepDefinition.java:47)\r\n\tat ✽.User has to click the login button and verify the outcomes of the test datas(file:src/test/resources/Features/SprintDemo.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To verify the login functionality by passing the invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to prepare all the prerequistie items",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_has_to_prepare_all_the_prerequistie_items()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter the url in browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_has_to_enter_the_url_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the invalid username \"jkl@gmail.com\" and password \"Mnop@101112\" in login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_has_to_pass_the_invalid_username_and_password_in_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button and verify the outcomes of the test datas",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_to_click_the_login_button_and_verify_the_outcomes_of_the_test_datas()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: user is in home page\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat qbrainx.stepDefinition.StepDefinition.user_has_to_click_the_login_button_and_verify_the_outcomes_of_the_test_datas(StepDefinition.java:47)\r\n\tat ✽.User has to click the login button and verify the outcomes of the test datas(file:src/test/resources/Features/SprintDemo.feature:7)\r\n",
  "status": "failed"
});
});