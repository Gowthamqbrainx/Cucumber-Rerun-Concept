package qbrainx.stepDefinition;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition {

public WebDriver driver;

@Given("User has to prepare all the prerequistie items")
public void user_has_to_prepare_all_the_prerequistie_items() {
 System.setProperty("webdriver.chrome.driver", "F:\\Gowtham\\Oxygen workspaces\\CucumberRerun\\Drivers\\chromedriver.exe");
 ChromeOptions notifs = new ChromeOptions();
 ChromeOptions disable = notifs.addArguments("--disable-notifications");
 driver = new ChromeDriver(disable);
 driver.manage().window().maximize();
}

@When("User has to enter the url in browser")
public void user_has_to_enter_the_url_in_browser() {
   driver.get("https://www.facebook.com/");
   driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
}

@When("User has to pass the invalid username {string} and password {string} in login page")
public void user_has_to_pass_the_invalid_username_and_password_in_login_page(String username, String password) {
 WebElement user = driver.findElement(By.id("email"));
 user.sendKeys(username);
 WebElement pass = driver.findElement(By.id("pass"));
 pass.sendKeys(password);
}

@Then("User has to click the login button and verify the outcomes of the test datas")
public void user_has_to_click_the_login_button_and_verify_the_outcomes_of_the_test_datas() {
   WebElement btn = driver.findElement(By.id("loginbutton"));
   Assert.assertTrue("user is in home page", btn.getText().equals("Welcome to FB") );
}


}
