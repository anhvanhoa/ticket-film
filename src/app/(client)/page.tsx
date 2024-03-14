import Banner from '~/components/banner';
import ComingSoon from '~/components/comingSoon';
import NowShow from '~/components/nowShow';
import { Film } from '~/types/film';
const data: Film[] = [
    {
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
    },
    {
        id: 2,
        slug: 'hanh-tinh-cat-p2',
        title: 'Hành Tinh Cát: Phần Hai',
        star: 7.8,
        category: 'Khoa Học Viễn Tưởng, Phiêu Lưu',
        poster: '/poster2.jpg',
        video: 'https://www.youtube.com/embed/_DS9QpvtAjE?autoplay=1',
        type: '16+',
        description:
            'Hãy theo dõi hành trình thần thoại của Paul Atreides khi anh đoàn kết với Chani và Fremen trong khi trên con đường trả thù những kẻ âm mưu phá hoại gia đình anh. Đứng trước sự lựa chọn giữa tình yêu của đời mình và số phận của vũ trụ đã biết, Paul cố gắng ngăn chặn một tương lai khủng khiếp mà chỉ có anh mới có thể nhìn thấy.'
    },
    {
        id: 3,
        title: 'MAI',
        slug: 'mai-2024',
        star: 9.8,
        category: 'Lãng Mạn',
        video: 'https://www.youtube.com/embed/Yz96EBNwMGw?autoplay=1',
        poster: '/poster.jpg',
        type: '18+',
        description:
            '"Mai" xoay quanh cuộc đời của một người phụ nữ đẹp tên Mai (do Phương Anh Đào thủ vai) có số phận rất đặc biệt. Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh nhìn soi mói, phán xét từ những người xung quanh. Và rồi Mai gặp Dương (Tuấn Trần) - chàng trai đào hoa lãng tử. Những tưởng bản thân không còn thiết tha yêu đương và mưu cầu hạnh phúc cho riêng mình thì khao khát được sống một cuộc đời mới trong Mai trỗi dậy khi Dương tấn công cô không khoan nhượng. Họ cho mình những khoảnh khắc tự do, say đắm và tràn đầy tiếng cười. Liệu cặp đôi ấy có nắm giữ được niềm hạnh phúc đó dài lâu khi miệng đời lắm khi cay nghiệt, bất công?'
    },
    {
        id: 4,
        slug: 'hanh-tinh-cat-p2',
        title: 'Hành Tinh Cát: Phần Hai',
        star: 7.8,
        category: 'Khoa Học Viễn Tưởng, Phiêu Lưu',
        poster: '/poster2.jpg',
        video: 'https://www.youtube.com/embed/_DS9QpvtAjE?autoplay=1',
        type: '16+',
        description:
            'Hãy theo dõi hành trình thần thoại của Paul Atreides khi anh đoàn kết với Chani và Fremen trong khi trên con đường trả thù những kẻ âm mưu phá hoại gia đình anh. Đứng trước sự lựa chọn giữa tình yêu của đời mình và số phận của vũ trụ đã biết, Paul cố gắng ngăn chặn một tương lai khủng khiếp mà chỉ có anh mới có thể nhìn thấy.'
    },
    {
        id: 5,
        title: 'MAI',
        slug: 'mai-2024',
        star: 9.8,
        category: 'Lãng Mạn',
        video: 'https://www.youtube.com/embed/Yz96EBNwMGw?autoplay=1',
        poster: '/poster.jpg',
        type: '18+',
        description:
            '"Mai" xoay quanh cuộc đời của một người phụ nữ đẹp tên Mai (do Phương Anh Đào thủ vai) có số phận rất đặc biệt. Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh nhìn soi mói, phán xét từ những người xung quanh. Và rồi Mai gặp Dương (Tuấn Trần) - chàng trai đào hoa lãng tử. Những tưởng bản thân không còn thiết tha yêu đương và mưu cầu hạnh phúc cho riêng mình thì khao khát được sống một cuộc đời mới trong Mai trỗi dậy khi Dương tấn công cô không khoan nhượng. Họ cho mình những khoảnh khắc tự do, say đắm và tràn đầy tiếng cười. Liệu cặp đôi ấy có nắm giữ được niềm hạnh phúc đó dài lâu khi miệng đời lắm khi cay nghiệt, bất công?'
    },
    {
        id: 6,
        slug: 'hanh-tinh-cat-p2',
        title: 'Hành Tinh Cát: Phần Hai',
        star: 7.8,
        category: 'Khoa Học Viễn Tưởng, Phiêu Lưu',
        poster: '/poster2.jpg',
        video: 'https://www.youtube.com/embed/_DS9QpvtAjE?autoplay=1',
        type: '16+',
        description:
            'Hãy theo dõi hành trình thần thoại của Paul Atreides khi anh đoàn kết với Chani và Fremen trong khi trên con đường trả thù những kẻ âm mưu phá hoại gia đình anh. Đứng trước sự lựa chọn giữa tình yêu của đời mình và số phận của vũ trụ đã biết, Paul cố gắng ngăn chặn một tương lai khủng khiếp mà chỉ có anh mới có thể nhìn thấy.'
    },
    {
        id: 7,
        title: 'MAI',
        slug: 'mai-2024',
        star: 9.8,
        category: 'Lãng Mạn',
        video: 'https://www.youtube.com/embed/Yz96EBNwMGw?autoplay=1',
        poster: '/poster.jpg',
        type: '18+',
        description:
            '"Mai" xoay quanh cuộc đời của một người phụ nữ đẹp tên Mai (do Phương Anh Đào thủ vai) có số phận rất đặc biệt. Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh nhìn soi mói, phán xét từ những người xung quanh. Và rồi Mai gặp Dương (Tuấn Trần) - chàng trai đào hoa lãng tử. Những tưởng bản thân không còn thiết tha yêu đương và mưu cầu hạnh phúc cho riêng mình thì khao khát được sống một cuộc đời mới trong Mai trỗi dậy khi Dương tấn công cô không khoan nhượng. Họ cho mình những khoảnh khắc tự do, say đắm và tràn đầy tiếng cười. Liệu cặp đôi ấy có nắm giữ được niềm hạnh phúc đó dài lâu khi miệng đời lắm khi cay nghiệt, bất công?'
    },
    {
        slug: 'hanh-tinh-cat-p2',
        id: 8,
        title: 'Hành Tinh Cát: Phần Hai',
        star: 7.8,
        category: 'Khoa Học Viễn Tưởng, Phiêu Lưu',
        poster: '/poster2.jpg',
        video: 'https://www.youtube.com/embed/_DS9QpvtAjE?autoplay=1',
        type: '16+',
        description:
            'Hãy theo dõi hành trình thần thoại của Paul Atreides khi anh đoàn kết với Chani và Fremen trong khi trên con đường trả thù những kẻ âm mưu phá hoại gia đình anh. Đứng trước sự lựa chọn giữa tình yêu của đời mình và số phận của vũ trụ đã biết, Paul cố gắng ngăn chặn một tương lai khủng khiếp mà chỉ có anh mới có thể nhìn thấy.'
    }
];
export default function Home() {
    return (
        <main className='pb-8'>
            <Banner />
            <NowShow films={data} />
            <ComingSoon films={data} />
        </main>
    );
}
