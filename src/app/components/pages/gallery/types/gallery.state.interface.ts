import { ImageInfo } from "./image.interface";

export interface GalleryState {
    isLoading: boolean;
    gallery: ImageInfo[];
    error: string | null;
}
