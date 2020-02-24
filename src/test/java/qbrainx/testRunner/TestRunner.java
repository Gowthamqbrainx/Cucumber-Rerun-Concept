package qbrainx.testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Features",
				glue = "qbrainx.stepDefinition", 
				dryRun = false, 
				strict = true, 
				monochrome = true, 
				plugin = {"html:Reports", "json:Reports/JsonReport.json", "rerun:src\\test\\resources\\FailedReports.txt"})
public class TestRunner {

}
