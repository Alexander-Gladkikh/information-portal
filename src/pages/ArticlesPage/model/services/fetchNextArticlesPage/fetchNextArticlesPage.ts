import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<
 void,
 void,
  ThunkConfig<string>
  >(
      'ArticlesPage/fetchNextArticlesPage',
      async (_, thunkApi) => {
          const {
              getState, dispatch,
          } = thunkApi;
          const hasMore = getArticlesPageHasMore(getState());
          const page = getArticlesPageNum(getState());
          const isLoading = getArticlesPageIsLoading(getState());

          if (hasMore && !isLoading) {
              dispatch(articlesPageActions.setPage(page + 1));
              dispatch(fetchArticleList({
                  page: page + 1,
              }));
          }
      },
  );
