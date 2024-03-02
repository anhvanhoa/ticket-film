import React from 'react';
import Film from './film';
const data = [
    {
        id: 1,
        title: 'MAI',
        star: 9.8,
        typeFilm: 'Lãng Mạn',
        video: 'https://www.youtube.com/embed/Yz96EBNwMGw?autoplay=1',
        poster: '/poster.jpg',
        description:
            '"Mai" xoay quanh cuộc đời của một người phụ nữ đẹp tên Mai (do Phương Anh Đào thủ vai) có số phận rất đặc biệt. Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh nhìn soi mói, phán xét từ những người xung quanh. Và rồi Mai gặp Dương (Tuấn Trần) - chàng trai đào hoa lãng tử. Những tưởng bản thân không còn thiết tha yêu đương và mưu cầu hạnh phúc cho riêng mình thì khao khát được sống một cuộc đời mới trong Mai trỗi dậy khi Dương tấn công cô không khoan nhượng. Họ cho mình những khoảnh khắc tự do, say đắm và tràn đầy tiếng cười. Liệu cặp đôi ấy có nắm giữ được niềm hạnh phúc đó dài lâu khi miệng đời lắm khi cay nghiệt, bất công?'
    },
    {
        id: 1,
        title: 'Hành Tinh Cát: Phần Hai',
        star: 7.8,
        typeFilm: 'Khoa Học Viễn Tưởng, Phiêu Lưu',
        poster: '/poster2.jpg',
        video: 'https://www.youtube.com/embed/_DS9QpvtAjE?autoplay=1',
        description:
            'Hãy theo dõi hành trình thần thoại của Paul Atreides khi anh đoàn kết với Chani và Fremen trong khi trên con đường trả thù những kẻ âm mưu phá hoại gia đình anh. Đứng trước sự lựa chọn giữa tình yêu của đời mình và số phận của vũ trụ đã biết, Paul cố gắng ngăn chặn một tương lai khủng khiếp mà chỉ có anh mới có thể nhìn thấy.'
    }
];
const NowShow = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-8'>
            <h2 className='text-2xl font-medium'>Đang chiếu</h2>
            <div className='grid grid-cols-6 mt-8 gap-4'>
                {data.map((film) => (
                    <Film
                        key={film.id}
                        image={film.poster}
                        star={film.star}
                        title={film.title}
                        typeFilm={film.typeFilm}
                        video={film.video}
                        description={film.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default NowShow;
