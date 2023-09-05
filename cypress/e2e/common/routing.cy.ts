import { selectByTestId } from '../../helper/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Открывает страницу пользователя', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Открывает несуществующий маршрут ', () => {
            cy.visit('/sdfdfbd');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Открывает страницу пользователя', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Открывает страницу списка статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
