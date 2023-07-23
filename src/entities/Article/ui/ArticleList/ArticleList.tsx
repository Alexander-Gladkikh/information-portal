import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC,
    HTMLAttributeAnchorTarget, memo, useEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from 'shared/const/localstorage';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget;
  onLoadNextPart?: () => void
}

const Header = () => <ArticlesPageFilters />;

const getSkeletons = () => new Array(3)
    .fill(0)
    .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton key={index} view={ArticleView.BIG} className={cls.card} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    // eslint-disable-next-line no-debugger
    debugger;
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        onLoadNextPart,
    } = props;
    const { t } = useTranslation();
    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 1;
        setSelectedArticleId(+paged);

        // return () => sessionStorage.removeItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (view === ArticleView.SMALL) {
            timeoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100);
        }

        return () => clearTimeout(timeoutId);
    }, [selectedArticleId, view]);

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
            index={index}
        />
    );

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getSkeletons()}
                </div>
            );
        }
        return null;
    });

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text
                    size={TextSize.L}
                    title={t('Статьи не найдены')}
                />
            </div>
        );
    }

    // eslint-disable-next-line react/no-unstable-nested-components
    const ItemContainerComp: FC<{ height: number; width: number; index: number}> = ({ index, height, width }) => (
        <div className={cls.ItemContainer}>
            <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
        </div>
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            { view === ArticleView.BIG ? (
                <Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                        Header,
                        Footer,
                    }}
                />
            ) : (
                <VirtuosoGrid
                    ref={virtuosoGridRef}
                    totalCount={articles.length}
                    components={{
                        Header,
                        ScrollSeekPlaceholder: ItemContainerComp,
                    }}
                    endReached={onLoadNextPart}
                    data={articles}
                    itemContent={renderArticle}
                    listClassName={cls.itemsWrapper}
                    scrollSeekConfiguration={{
                        enter: (velocity) => Math.abs(velocity) > 200,
                        exit: (velocity) => Math.abs(velocity) < 30,
                    }}
                />
            )}
        </div>
    );
});
