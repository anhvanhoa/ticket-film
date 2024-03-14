import { Button } from './ui/button';
import Calendar from './calendar';
import MovieTheater from './movieTheater';

const BookTicket = () => {
    return (
        <div>
            <div className='mt-4 border rounded-sm'>
                <div>
                    <Calendar />
                </div>
                <div>
                    <MovieTheater
                        address='Tầng 3, 4 | TTTM AEON MALL HÀ ĐÔNG, P. Dương Nội,
                                        Q. Hà Đông, Hà Nội'
                        name='Beta Hà Nội'
                        typeTheater='2D Phụ Đề'
                        times={[
                            {
                                end: '14:41',
                                start: '12:11',
                                id: 1
                            }
                        ]}
                    />
                </div>
                <div className='text-center my-6'>
                    <Button
                        variant={'outline'}
                        className='rounded-full h-8 border-[#05539884] text-[#055398] hover:text-[#055398] font-bold bg-[#05539809] hover:bg-[#05539818]'
                    >
                        Xem thêm
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BookTicket;
