import Link from 'next/link';

const dataTheater = [
    {
        id: 1,
        name: 'Beta Cinemas Lào Cai - Hotline 0358 968 970'
    },
    {
        id: 2,
        name: 'Beta Cinemas Trần Quang Khải, TP Hồ Chí Minh - Hotline 1900 638 362'
    },
    {
        id: 3,
        name: 'Beta Cinemas TRMall Phú Quốc, Kiên Giang - Hotline 0983 474 440'
    },
    {
        id: 4,
        name: 'Beta Cinemas Empire Bình Dương - Hotline 0934 573 748'
    },
    {
        id: 5,
        name: 'Beta Cinemas Quang Trung, TP Hồ Chí Minh - Hotline 0706 075 509'
    },
    {
        id: 6,
        name: 'Beta Cinemas Giải Phóng, Hà Nội - Hotline 0585 680 360'
    },
    {
        id: 7,
        name: 'Beta Cinemas Thanh Xuân, Hà Nội - Hotline 082 4812878'
    },
    {
        id: 8,
        name: 'Beta Cinemas Mỹ Đình, Hà Nội - Hotline 0866 154 610'
    }
];
const dataService = [
    {
        id: 1,
        name: 'Tuyển dụng'
    },
    {
        id: 2,
        name: 'Giới thiệu'
    },
    {
        id: 3,
        name: 'F.A.Q'
    },
    {
        id: 4,
        name: 'Điều khoản sử dụng'
    },
    {
        id: 5,
        name: 'Điều khoản bảo mật'
    },
    {
        id: 6,
        name: 'Chính sách thanh toán & đổi trả - hoàn vé'
    },
    {
        id: 7,
        name: 'Hướng dẫn đặt vé online'
    }
];
const Footer = () => {
    return (
        <div className='border-t mt-14'>
            <div className='grid grid-cols-3 max-w-screen-xl mx-auto py-8 gap-x-8'>
                <div>
                    <h6 className='text-lg font-semibold'>Công ty cổ phần BETA</h6>
                    <div className='text-sm *:mt-2 text-gray-500'>
                        <p>
                            Giấy chứng nhận ĐKKD số: 0106633482 - Đăng ký lần đầu ngày
                            08/09/2014 tại Sở Kế hoạch và Đầu tư Thành phố Hà Nội
                        </p>
                        <p>
                            Địa chỉ trụ sở: Tầng 3, số 595, đường Giải Phóng, phường Giáp
                            Bát, quận Hoàng Mai, thành phố Hà Nội
                        </p>
                    </div>
                    <h6 className='text-lg font-semibold mt-4'>Liên hệ</h6>
                    <div className='text-sm *:py-0.5 text-gray-500'>
                        <p>Hotline: 1900 636807 / 0934 632682</p>
                        <p>Email: mkt@betacinemas.vn</p>
                    </div>
                </div>
                <div>
                    <h6 className='text-lg font-semibold'>Rạp BETA</h6>
                    <div className='text-sm mt-2 text-gray-500 hover:*:underline *:pb-1'>
                        {dataTheater.map((theater) => (
                            <p key={theater.id}>
                                <Link href={'/#'}>{theater.name}</Link>
                            </p>
                        ))}
                    </div>
                </div>
                <div>
                    <h6 className='text-lg font-semibold'>Dịch Vụ & Điều khoản</h6>
                    <div className='text-sm mt-2 text-gray-500 hover:*:underline *:pb-1'>
                        {dataService.map((service) => (
                            <p key={service.id}>
                                <Link href={'/#'}>{service.name}</Link>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
