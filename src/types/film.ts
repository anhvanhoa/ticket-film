export type TypeFilm = 'P' | 'K' | '13+' | '16+' | '18+';

export interface Film {
    id: number;
    poster: string;
    title: string;
    category: string;
    star: number;
    description: string;
    video: string;
    slug: string;
    type: TypeFilm;
}
