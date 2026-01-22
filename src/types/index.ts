export type UserRole = "admin" | "writer" | "reader";

export type PostStatus = "draft" | "pending" | "published" | "rejected";

export interface User {
    id: number;
    email: string;
    full_name?: string;
    avatar?: string;
    is_active: boolean;
    role: UserRole;
    created_at: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
    image?: string;
    read_time?: string;
    featured: boolean;
    status: PostStatus;
    category_id?: number;
    author_id: number;
    created_at: string;
    updated_at?: string;

    // Relations
    author?: User;
    category?: Category;
    likes_count: number;
}
