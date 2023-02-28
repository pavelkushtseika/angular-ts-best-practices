import { PostInfo } from './post.interface';

export interface PostsState {
    isLoading: boolean;
    posts: PostInfo[];
    error: string | null;
}
