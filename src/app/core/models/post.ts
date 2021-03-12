import { User } from "./user";

export interface Post {
    authorId: number;
    id: number;
    title: string;
    body: string;
    author?: User;
    createdAt: string;
}