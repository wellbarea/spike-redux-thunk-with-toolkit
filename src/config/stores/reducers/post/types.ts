export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
  
export interface InitialStateProps {
    data: Post[];
    loading: boolean;
    error: string | null;
};
  
