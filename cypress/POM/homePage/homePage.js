import { header } from "../header/header";

class HomePage {
    navigateToLoginPage() {
        header.clickLoginDropDown();
        header.clickLoginButton();
    }
}

export const homePage = new HomePage();