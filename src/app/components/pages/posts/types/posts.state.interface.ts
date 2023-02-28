import { PostInfo } from "../../../shared/post/post.component";

export interface PostsState {
    isLoading: boolean;
    posts: PostInfo[];
    error: string | null;
}
