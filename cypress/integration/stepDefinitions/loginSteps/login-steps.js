import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageObjects/login/login-page";

const loginPage = new LoginPage();

Given("I login as", function () {
    loginPage.roleLogin();
});