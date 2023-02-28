import { GalleryState } from "../components/pages/gallery/types/gallery.state.interface";
import { PostsState } from "../components/pages/posts/types/posts.state.interface";

export interface AppState {
  posts: PostsState,
  gallery: GalleryState
}
