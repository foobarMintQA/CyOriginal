import BasePage from "../base-page.js";

class LoginPage extends BasePage {

    elements = {
        username: "#username",
    }

    roleLogin() {
        this.typeText(this.elements.username, "admin@test.com");
    }
}

export default LoginPage;