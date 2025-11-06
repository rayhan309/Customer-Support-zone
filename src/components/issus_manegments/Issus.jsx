import { use } from 'react';
import Banner from '../banner/Banner'
import IssuCard from './card/IssuCard';
import AsideCard from './asideCard/AsideCard';

const Issus = ({ promissData }) => {

    const issus = use(promissData)

    return (
        <>
            {/* banner */}
            <Banner></Banner>
            <div className='max-w-[1450px] mx-auto mt-20 grid grid-cols-12 gap-8'>

                <div className='borde-2 border-amber-800 p-3 min-h-14 col-span-9'>
                    <IssuCard issus={issus}></IssuCard>
                </div>
                <div className='col-span-3'>
                    <AsideCard></AsideCard>
                </div>

            </div>
        </>
    );
};

export default Issus;