import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Python news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://gss-technology.com/wp-content/uploads/2021/07/roun6.png',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'IT',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'asasf' },
    body: article ?? defaultArticle,
}).then((res) => res.body);

export const removeArticle = (articleId: string) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asasf' },
});

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
