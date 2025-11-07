import { use } from 'react';
import { useState } from 'react';
import Banner from '../banner/Banner'
import IssuCard from './card/IssuCard';
import AsideCard from './asideCard/AsideCard';

const Issus = ({ promissData }) => {

    const issus = use(promissData)

    const [data, setData] = useState(issus);

    const [isIn_Progress, setIsIn_Progress] = useState([])

    const isProgress = isIn_Progress.filter(card => card.status == "In-Progress")
    const isResolved = isIn_Progress.filter(card => card.status == "Resolved")

    // const [isResolved, setIsResolved] = useState([])
    // console.log("resolved", isResolved)

    return (
        <>
            {/* banner */}
            <Banner isIn_Progress={isIn_Progress}></Banner>
            <div className='max-w-[1450px] mx-auto mt-28'>
                <h2 className='text-2xl font-semibold text-gray-700'>Customer Tickets</h2>
                <div className='mt-1 grid grid-cols-12 gap-8'>
                    <div className='borde-2 border-amber-800 p-3 min-h-14 col-span-9'>
                        <IssuCard
                            data={data}
                            setIsIn_Progress={setIsIn_Progress}
                            isIn_Progress={isIn_Progress}></IssuCard>
                    </div>
                    <div className='col-span-3'>
                        <AsideCard isProgress={isProgress} isIn_Progress={isIn_Progress} setIsIn_Progress={setIsIn_Progress} isResolved={isResolved}></AsideCard>
                    </div>
                </div>
             </div>
        </>
    );
};

export default Issus;