import Banner from '~/components/banner';
import ComingSoon from '~/components/comingSoon';
import NowShow from '~/components/nowShow';

export default function Home() {
    return (
        <main className='pb-8'>
            <Banner />
            <NowShow />
            {/* <ComingSoon /> */}
        </main>
    );
}
