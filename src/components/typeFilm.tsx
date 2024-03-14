import { TypeFilm as FilmType } from '~/types/film';

interface Props {
    typeFilm: FilmType;
}
const TypeFilm = ({ typeFilm }: Props) => {
    const filmType: Record<FilmType, string> = {
        '13+': 'bg-[#DDBC3E]',
        '16+': 'bg-[#E88022]',
        '18+': 'bg-[#9B211F]',
        K: 'bg-[#579B42]',
        P: 'bg-[#006EE6] px-1.5'
    };
    return (
        <div
            className={`font-medium inline-block text-white text-xs px-1 py-0.5 rounded-[2px] ${filmType[typeFilm]}`}
        >
            {typeFilm}
        </div>
    );
};

export default TypeFilm;
