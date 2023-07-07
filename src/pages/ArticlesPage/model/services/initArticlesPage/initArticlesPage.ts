import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
      'ArticlesPage/initArticlesPage',
      async (_, thunkApi) => {
          const {
              getState, dispatch,
          } = thunkApi;
          const inited = getArticlesPageInited(getState());

          if (!inited) {
              dispatch(articlesPageActions.initState());
              dispatch(fetchArticleList({}));
          }
      },
  );
