'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogClose,
    DialogTitle,
    DialogTrigger
} from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { ChevronDown, MapPin, Search } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import clsx from 'clsx';

const dataLocation = [
    {
        id: 1,
        name: 'An Giang',
        slug: 'an-giang',
        type: 'tinh',
        name_with_type: 'Tỉnh An Giang',
        code: '89'
    },
    {
        id: 2,
        name: 'Kon Tum',
        slug: 'kon-tum',
        type: 'tinh',
        name_with_type: 'Tỉnh Kon Tum',
        code: '62'
    },
    {
        id: 3,
        name: 'Đắk Nông',
        slug: 'dak-nong',
        type: 'tinh',
        name_with_type: 'Tỉnh Đắk Nông',
        code: '67'
    },
    {
        id: 4,
        name: 'Sóc Trăng',
        slug: 'soc-trang',
        type: 'tinh',
        name_with_type: 'Tỉnh Sóc Trăng',
        code: '94'
    },
    {
        id: 5,
        name: 'Bình Phước',
        slug: 'binh-phuoc',
        type: 'tinh',
        name_with_type: 'Tỉnh Bình Phước',
        code: '70'
    },
    {
        id: 6,
        name: 'Hưng Yên',
        slug: 'hung-yen',
        type: 'tinh',
        name_with_type: 'Tỉnh Hưng Yên',
        code: '33'
    },
    {
        id: 7,
        name: 'Thanh Hóa',
        slug: 'thanh-hoa',
        type: 'tinh',
        name_with_type: 'Tỉnh Thanh Hóa',
        code: '38'
    },
    {
        id: 8,
        name: 'Quảng Trị',
        slug: 'quang-tri',
        type: 'tinh',
        name_with_type: 'Tỉnh Quảng Trị',
        code: '45'
    },
    {
        id: 9,
        name: 'Tuyên Quang',
        slug: 'tuyen-quang',
        type: 'tinh',
        name_with_type: 'Tỉnh Tuyên Quang',
        code: '08'
    },
    {
        id: 10,
        name: 'Quảng Ngãi',
        slug: 'quang-ngai',
        type: 'tinh',
        name_with_type: 'Tỉnh Quảng Ngãi',
        code: '51'
    },
    {
        id: 11,
        name: 'Hà Nội',
        slug: 'ha-noi',
        type: 'thanh-pho',
        name_with_type: 'Thành phố Hà Nội',
        code: '01'
    },
    {
        id: 12,
        name: 'Lào Cai',
        slug: 'lao-cai',
        type: 'tinh',
        name_with_type: 'Tỉnh Lào Cai',
        code: '10'
    },
    {
        id: 13,
        name: 'Vĩnh Long',
        slug: 'vinh-long',
        type: 'tinh',
        name_with_type: 'Tỉnh Vĩnh Long',
        code: '86'
    },
    {
        id: 14,
        name: 'Lâm Đồng',
        slug: 'lam-dong',
        type: 'tinh',
        name_with_type: 'Tỉnh Lâm Đồng',
        code: '68'
    },
    {
        id: 15,
        name: 'Bình Định',
        slug: 'binh-dinh',
        type: 'tinh',
        name_with_type: 'Tỉnh Bình Định',
        code: '52'
    },
    {
        id: 16,
        name: 'Nghệ An',
        slug: 'nghe-an',
        type: 'tinh',
        name_with_type: 'Tỉnh Nghệ An',
        code: '40'
    },
    {
        id: 17,
        name: 'Kiên Giang',
        slug: 'kien-giang',
        type: 'tinh',
        name_with_type: 'Tỉnh Kiên Giang',
        code: '91'
    },
    {
        id: 18,
        name: 'Hà Giang',
        slug: 'ha-giang',
        type: 'tinh',
        name_with_type: 'Tỉnh Hà Giang',
        code: '02'
    },
    {
        id: 19,
        name: 'Phú Yên',
        slug: 'phu-yen',
        type: 'tinh',
        name_with_type: 'Tỉnh Phú Yên',
        code: '54'
    },
    {
        id: 20,
        name: 'Lạng Sơn',
        slug: 'lang-son',
        type: 'tinh',
        name_with_type: 'Tỉnh Lạng Sơn',
        code: '20'
    },
    {
        id: 21,
        name: 'Đà Nẵng',
        slug: 'da-nang',
        type: 'thanh-pho',
        name_with_type: 'Thành phố Đà Nẵng',
        code: '48'
    },
    {
        id: 22,
        name: 'Sơn La',
        slug: 'son-la',
        type: 'tinh',
        name_with_type: 'Tỉnh Sơn La',
        code: '14'
    },
    {
        id: 23,
        name: 'Tây Ninh',
        slug: 'tay-ninh',
        type: 'tinh',
        name_with_type: 'Tỉnh Tây Ninh',
        code: '72'
    },
    {
        id: 24,
        name: 'Nam Định',
        slug: 'nam-dinh',
        type: 'tinh',
        name_with_type: 'Tỉnh Nam Định',
        code: '36'
    },
    {
        id: 25,
        name: 'Lai Châu',
        slug: 'lai-chau',
        type: 'tinh',
        name_with_type: 'Tỉnh Lai Châu',
        code: '12'
    },
    {
        id: 26,
        name: 'Bến Tre',
        slug: 'ben-tre',
        type: 'tinh',
        name_with_type: 'Tỉnh Bến Tre',
        code: '83'
    },
    {
        id: 27,
        name: 'Khánh Hòa',
        slug: 'khanh-hoa',
        type: 'tinh',
        name_with_type: 'Tỉnh Khánh Hòa',
        code: '56'
    },
    {
        id: 28,
        name: 'Bình Thuận',
        slug: 'binh-thuan',
        type: 'tinh',
        name_with_type: 'Tỉnh Bình Thuận',
        code: '60'
    },
    {
        id: 29,
        name: 'Cao Bằng',
        slug: 'cao-bang',
        type: 'tinh',
        name_with_type: 'Tỉnh Cao Bằng',
        code: '04'
    },
    {
        id: 30,
        name: 'Hải Phòng',
        slug: 'hai-phong',
        type: 'thanh-pho',
        name_with_type: 'Thành phố Hải Phòng',
        code: '31'
    },
    {
        id: 31,
        name: 'Ninh Bình',
        slug: 'ninh-binh',
        type: 'tinh',
        name_with_type: 'Tỉnh Ninh Bình',
        code: '37'
    },
    {
        id: 32,
        name: 'Yên Bái',
        slug: 'yen-bai',
        type: 'tinh',
        name_with_type: 'Tỉnh Yên Bái',
        code: '15'
    },
    {
        id: 33,
        name: 'Gia Lai',
        slug: 'gia-lai',
        type: 'tinh',
        name_with_type: 'Tỉnh Gia Lai',
        code: '64'
    },
    {
        id: 34,
        name: 'Hoà Bình',
        slug: 'hoa-binh',
        type: 'tinh',
        name_with_type: 'Tỉnh Hoà Bình',
        code: '17'
    },
    {
        id: 35,
        name: 'Bà Rịa - Vũng Tàu',
        slug: 'ba-ria-vung-tau',
        type: 'tinh',
        name_with_type: 'Tỉnh Bà Rịa - Vũng Tàu',
        code: '77'
    },
    {
        id: 36,
        name: 'Cà Mau',
        slug: 'ca-mau',
        type: 'tinh',
        name_with_type: 'Tỉnh Cà Mau',
        code: '96'
    },
    {
        id: 37,
        name: 'Bình Dương',
        slug: 'binh-duong',
        type: 'tinh',
        name_with_type: 'Tỉnh Bình Dương',
        code: '74'
    },
    {
        id: 38,
        name: 'Cần Thơ',
        slug: 'can-tho',
        type: 'thanh-pho',
        name_with_type: 'Thành phố Cần Thơ',
        code: '92'
    },
    {
        id: 39,
        name: 'Thừa Thiên Huế',
        slug: 'thua-thien-hue',
        type: 'tinh',
        name_with_type: 'Tỉnh Thừa Thiên Huế',
        code: '46'
    },
    {
        id: 40,
        name: 'Đồng Nai',
        slug: 'dong-nai',
        type: 'tinh',
        name_with_type: 'Tỉnh Đồng Nai',
        code: '75'
    },
    {
        id: 41,
        name: 'Tiền Giang',
        slug: 'tien-giang',
        type: 'tinh',
        name_with_type: 'Tỉnh Tiền Giang',
        code: '82'
    },
    {
        id: 42,
        name: 'Điện Biên',
        slug: 'dien-bien',
        type: 'tinh',
        name_with_type: 'Tỉnh Điện Biên',
        code: '11'
    },
    {
        id: 43,
        name: 'Vĩnh Phúc',
        slug: 'vinh-phuc',
        type: 'tinh',
        name_with_type: 'Tỉnh Vĩnh Phúc',
        code: '26'
    },
    {
        id: 44,
        name: 'Quảng Nam',
        slug: 'quang-nam',
        type: 'tinh',
        name_with_type: 'Tỉnh Quảng Nam',
        code: '49'
    },
    {
        id: 45,
        name: 'Đắk Lắk',
        slug: 'dak-lak',
        type: 'tinh',
        name_with_type: 'Tỉnh Đắk Lắk',
        code: '66'
    },
    {
        id: 46,
        name: 'Thái Nguyên',
        slug: 'thai-nguyen',
        type: 'tinh',
        name_with_type: 'Tỉnh Thái Nguyên',
        code: '19'
    },
    {
        id: 47,
        name: 'Hải Dương',
        slug: 'hai-duong',
        type: 'tinh',
        name_with_type: 'Tỉnh Hải Dương',
        code: '30'
    },
    {
        id: 48,
        name: 'Bạc Liêu',
        slug: 'bac-lieu',
        type: 'tinh',
        name_with_type: 'Tỉnh Bạc Liêu',
        code: '95'
    },
    {
        id: 49,
        name: 'Trà Vinh',
        slug: 'tra-vinh',
        type: 'tinh',
        name_with_type: 'Tỉnh Trà Vinh',
        code: '84'
    },
    {
        id: 50,
        name: 'Thái Bình',
        slug: 'thai-binh',
        type: 'tinh',
        name_with_type: 'Tỉnh Thái Bình',
        code: '34'
    },
    {
        id: 51,
        name: 'Hà Tĩnh',
        slug: 'ha-tinh',
        type: 'tinh',
        name_with_type: 'Tỉnh Hà Tĩnh',
        code: '42'
    },
    {
        id: 52,
        name: 'Ninh Thuận',
        slug: 'ninh-thuan',
        type: 'tinh',
        name_with_type: 'Tỉnh Ninh Thuận',
        code: '58'
    },
    {
        id: 53,
        name: 'Đồng Tháp',
        slug: 'dong-thap',
        type: 'tinh',
        name_with_type: 'Tỉnh Đồng Tháp',
        code: '87'
    },
    {
        id: 54,
        name: 'Long An',
        slug: 'long-an',
        type: 'tinh',
        name_with_type: 'Tỉnh Long An',
        code: '80'
    },
    {
        id: 55,
        name: 'Hậu Giang',
        slug: 'hau-giang',
        type: 'tinh',
        name_with_type: 'Tỉnh Hậu Giang',
        code: '93'
    },
    {
        id: 56,
        name: 'Quảng Ninh',
        slug: 'quang-ninh',
        type: 'tinh',
        name_with_type: 'Tỉnh Quảng Ninh',
        code: '22'
    },
    {
        id: 57,
        name: 'Phú Thọ',
        slug: 'phu-tho',
        type: 'tinh',
        name_with_type: 'Tỉnh Phú Thọ',
        code: '25'
    },
    {
        id: 58,
        name: 'Quảng Bình',
        slug: 'quang-binh',
        type: 'tinh',
        name_with_type: 'Tỉnh Quảng Bình',
        code: '44'
    },
    {
        id: 59,
        name: 'Hồ Chí Minh',
        slug: 'ho-chi-minh',
        type: 'thanh-pho',
        name_with_type: 'Thành phố Hồ Chí Minh',
        code: '79'
    },
    {
        id: 60,
        name: 'Hà Nam',
        slug: 'ha-nam',
        type: 'tinh',
        name_with_type: 'Tỉnh Hà Nam',
        code: '35'
    },
    {
        id: 61,
        name: 'Bắc Ninh',
        slug: 'bac-ninh',
        type: 'tinh',
        name_with_type: 'Tỉnh Bắc Ninh',
        code: '27'
    },
    {
        id: 62,
        name: 'Bắc Giang',
        slug: 'bac-giang',
        type: 'tinh',
        name_with_type: 'Tỉnh Bắc Giang',
        code: '24'
    },
    {
        id: 63,
        name: 'Bắc Kạn',
        slug: 'bac-kan',
        type: 'tinh',
        name_with_type: 'Tỉnh Bắc Kạn',
        code: '06'
    }
];

const ChooseLocation = () => {
    const [active, setActive] = useState(11);
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <div className='text-[#055398] border border-[#055398] rounded-sm hover:bg-gray-50'>
                        <div className='flex items-start py-2 px-2'>
                            <div className='flex items-start mr-12 gap-1'>
                                <MapPin size={18} />
                                <p className='text-sm font-medium'>Hà Nội</p>
                            </div>
                            <ChevronDown size={20} />
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className='max-w-3xl pt-8 pb-4 px-0'>
                    <DialogDescription className='mt-6 text-black max-h-[500px] overflow-auto px-6'>
                        <div className='flex items-center justify-between'>
                            <DialogTitle className='text-xl font-bold'>
                                Chọn địa điểm
                            </DialogTitle>
                            <div className='relative'>
                                <Input
                                    className='h-9 focus-visible:ring-transparent focus-visible:ring-0'
                                    placeholder='Tìm địa điểm ...'
                                />
                                <Search className='size-5 absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer' />
                            </div>
                        </div>
                        <div className='mt-4 overflow-hidden'>
                            <div className='grid grid-cols-4 gap-5'>
                                {dataLocation.map((location) => (
                                    <Button
                                        onClick={() => setActive(location.id)}
                                        key={location.id}
                                        variant={'outline'}
                                        className={clsx(
                                            'justify-start border-transparent',
                                            {
                                                'border-[#055398] text-[#055398] hover:text-[#055398]':
                                                    location.id === active
                                            }
                                        )}
                                    >
                                        {location.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </DialogDescription>
                    <div className='text-right px-8 border-t pt-4'>
                        <DialogClose>
                            <Button
                                size={'sm'}
                                className='px-6 bg-[#055398] hover:bg-[#055398]'
                            >
                                Đóng
                            </Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ChooseLocation;
