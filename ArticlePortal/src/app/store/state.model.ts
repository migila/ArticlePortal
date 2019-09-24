import { User } from '../core/user.model';
import { Article } from '../core/article.model';

export interface StateModel {
    users: User[];
    usersError: string;
    isLoading: boolean;
    articles: Article[];
    articlesError: string;
    isLoadingArticles: boolean;
    currentArticle: Article | null;
}

export const initState: StateModel = {
    users: [],
    usersError: '',
    isLoading: false,
    articles: [],
    articlesError: '',
    isLoadingArticles: false,
    currentArticle: null
};
