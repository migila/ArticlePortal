import { User } from '../core/user.model';
import { Article } from '../core/article.model';

export interface StateModel {
    users: User[];
    articles: Article[];
}

export const initState: StateModel = {
    users: null,
    articles: null
};
