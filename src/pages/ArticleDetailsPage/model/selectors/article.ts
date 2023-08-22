import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    // eslint-disable-next-line consistent-return
    (article, user) => {
        if (!article || !user) {
            return false;
        }
        return article.user.id === user.id;
    },
);
