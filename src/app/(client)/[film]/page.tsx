import React from 'react';
import FilmDetail from '~/components/filmDetail';
import BookTicket from '~/components/bookTicket';
import NowShow from './nowShow';
import ChooseLocation from '~/components/chooseLocation';
import { Film } from '~/types/film';

const film: Film = {
    id: 1,
    title: 'MAI',
    slug: 'mai-2024',
    star: 9.8,
    category: 'Lãng Mạn',
    video: 'https://www.youtube.com/embed/Yz96EBNwMGw?autoplay=1',
    poster: '/poster.jpg',
    type: '18+',
    description:
        '"Mai" xoay quanh cuộc đời của một người phụ nữ đẹp tên Mai (do Phương Anh Đào thủ vai) có số phận rất đặc biệt. Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh nhìn soi mói, phán xét từ những người xung quanh. Và rồi Mai gặp Dương (Tuấn Trần) - chàng trai đào hoa lãng tử. Những tưởng bản thân không còn thiết tha yêu đương và mưu cầu hạnh phúc cho riêng mình thì khao khát được sống một cuộc đời mới trong Mai trỗi dậy khi Dương tấn công cô không khoan nhượng. Họ cho mình những khoảnh khắc tự do, say đắm và tràn đầy tiếng cười. Liệu cặp đôi ấy có nắm giữ được niềm hạnh phúc đó dài lâu khi miệng đời lắm khi cay nghiệt, bất công?'
};

const page = () => {
    return (
        <div>
            <FilmDetail film={film} />
            <div className='max-w-screen-xl mx-auto mt-12 mb-8'>
                <div className='grid grid-cols-3 gap-x-8'>
                    <div className='col-span-2'>
                        <div className='flex justify-between items-end gap-x-4'>
                            <h3 className='text-xl font-bold'>Lịch chiếu Mai</h3>
                            <div className='flex-shrink-0 flex items-center gap-x-6'>
                                <ChooseLocation />
                            </div>
                        </div>
                        <div>
                            <BookTicket />
                        </div>
                    </div>
                    <div className='col-span-1 ml-8'>
                        <h2 className='text-xl font-bold'>Phim đang chiếu</h2>
                        <div className='mt-4'>
                            <NowShow film={film} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
