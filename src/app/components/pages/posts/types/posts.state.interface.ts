import { PostInfo } from "../components/post/post.component";

export interface PostsState {
    isLoading: boolean;
    posts: PostInfo[];
    error: string | null;
}
