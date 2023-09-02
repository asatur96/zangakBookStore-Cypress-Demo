/// <reference types="cypress" />

import { header } from "../POM/header/header";
import headerAssertionHelpers from "../POM/header/headerAssertionHelpers";


describe('Zangak BookStore - Header Elements verification', () => {

    beforeEach(() => {
        cy.viewport(1800, 1000);
        cy.visit('');
    })

    it('Verify Header Elements should be visible', () => {
        header.elements.homeButton().should('exist');
        header.elements.searchInputField().should('exist').and('be.empty');
        header.elements.searchSubmitButton().should('be.visible').and('be.enabled');
        header.elements.changeLanguageDropDown().should('exist').and('be.visible');
        header.elements.loginDropDown().should('exist').and('be.visible');
        header.elements.whishListButton().should('exist').and('be.visible');
        header.elements.favoritesButton().should('exist').and('be.visible');
        header.elements.menuBar().each($item => {
            cy.wrap($item).should('be.visible');
        })
    })

    describe('Verify change language dropdown', () => {
        it('Verify change language dropdown Options', () => {
            cy.fixture('languages').then((languages) => {
                // Check Language Options
                headerAssertionHelpers.assertLanguageOptions(languages.languageOptions);
            });
        })
    
        it('Verify change language: ARM', () => {
            cy.fixture('languages').then((languages) => {
                cy.wrap(languages.languageURLs.ARM).then(
                    (object) => {
                        header.changeLanguage(object.language);
                        
                        headerAssertionHelpers.assertSelectedLanguage(object);
                    })
            });
        })
    
        it('Verify change language: RUS', () => {
            cy.fixture('languages').then((languages) => {
                cy.wrap(languages.languageURLs.RUS).then(
                    (object) => {
                        header.changeLanguage(object.language);
                        
                        headerAssertionHelpers.assertSelectedLanguage(object);
                    })
            });
        })
    
        it('Verify change language: ENG', () => {
            cy.fixture('languages').then((languages) => {
                cy.wrap(languages.languageURLs.ENG).then(
                    (object) => {
                        header.changeLanguage(object.language);

                        headerAssertionHelpers.assertSelectedLanguage(object);
                    })
            });
        })
    })

    describe('Verify Menu Bar', () => {
        it('Verify menu bar items: ENG', () => {
            cy.fixture('menuBar').then(json => {
                cy.wrap(json.barContent.ENG).then((item) => {
                    header.changeLanguage(item.language);
                    
                    headerAssertionHelpers.assertMenuBarContent(item.menuBarItems);
                })
            })
        })
    
        it('Verify menu bar items: RUS', () => {
            cy.fixture('menuBar').then(json => {
                cy.wrap(json.barContent.RUS).then((item) => {
                    header.changeLanguage(item.language);
                    
                    headerAssertionHelpers.assertMenuBarContent(item.menuBarItems);
                })
            })
        })
    
        it('Verify menu bar items: ARM', () => {
            cy.fixture('menuBar').then(json => {
                cy.wrap(json.barContent.ARM).then((item) => {
                    header.changeLanguage(item.language);
                    
                    headerAssertionHelpers.assertMenuBarContent(item.menuBarItems);
                })
            })
        })
    
        it('Verify menu bar navigation', () => {
            header.changeLanguage('ENG');
            cy.fixture('menuBar').then(json => {
                cy.wrap(json.barNavigation).each((item) => {
                    header.navigateTo(item.name);
                    cy.url().then(url => {
                        expect(cy.endsWith(url, item.url), true);
                    })
                })
            })
        })

        /*
          SHOULD BE ADDED Hovers and navigation for RUS/ARM flows.
        */
    })

    describe('Verify login button', () => {
        it('login button: ENG', () => {
            cy.fixture('login').then(login => {
                cy.wrap(login.headerDropDown.ENG).then(
                    item => {
                        header.changeLanguage(item.language);
                        header.clickLoginDropDown();
                        
                        headerAssertionHelpers.assertLoginButton(item.login);
                    }
                )
            })
        })

        it('login button: RUS', () => {
            cy.fixture('login').then(login => {
                cy.wrap(login.headerDropDown.RUS).then(
                    item => {
                        header.changeLanguage(item.language);
                        header.clickLoginDropDown();
                        
                        headerAssertionHelpers.assertLoginButton(item.login);
                    }
                )
            })
        }) 

        it('login button: ARM', () => {
            cy.fixture('login').then(login => {
                cy.wrap(login.headerDropDown.ARM).then(
                    item => {
                        header.changeLanguage(item.language);
                        header.clickLoginDropDown();
                        
                        headerAssertionHelpers.assertLoginButton(item.login);
                    }
                )
            })
        }) 
    })

    describe('Verify signIn button', () => {
        it('signIn button: ENG', () => {
            cy.fixture('login').then(login => {
                cy.wrap(login.headerDropDown.ENG).then(
                    item => {
                        header.changeLanguage(item.language);
                        header.clickLoginDropDown();
                        
                        headerAssertionHelpers.assertSigninButton(item.signin);
                    }
                )
            })
        })

        it('signIn button: RUS', () => {
            cy.fixture('login').then(login => {
                cy.wrap(login.headerDropDown.RUS).then(
                    item => {
                        header.changeLanguage(item.language);
                        header.clickLoginDropDown();
                        
                        headerAssertionHelpers.assertSigninButton(item.signin);
                    }
                )
            })
        })

        it('signIn button: ARM', () => {
            cy.fixture('login').then(login => {
                cy.wrap(login.headerDropDown.ARM).then(
                    item => {
                        header.changeLanguage(item.language);
                        header.clickLoginDropDown();
                        
                        headerAssertionHelpers.assertSigninButton(item.signin);
                    }
                )
            })
        })
    })
    
})