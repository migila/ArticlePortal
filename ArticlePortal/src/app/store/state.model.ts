import { User } from '../core/user.model';
import { Article } from '../core/article.model';

export interface StateModel {
    users: User[];
    usersError: string;
    isLoading: boolean;
    articles: Article[];
    articlesError: string;
}

export const initState: StateModel = {
    users: [],
    usersError: '',
    isLoading: false,
    articles: [],
    articlesError: '',
};
