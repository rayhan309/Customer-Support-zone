import { toast } from "react-toastify";

const AsideCardShow = ({ data, setData, isIn_ProgressData, isIn_Progress, setIsIn_Progress }) => {

    const complitBtnHandler = () => {
        toast("Resolved Done!")
        const setResolved = isIn_ProgressData;
        setResolved.status = "Resolved";

        const filteredIsIn_Progress = isIn_Progress.filter(data => data.id != setResolved.id)

        const filteredData = data.filter(d => d.id != setResolved.id)
        // console.log(filteredData)

        setData([...filteredData])

        setIsIn_Progress([...isIn_Progress, filteredIsIn_Progress])
    }
        return (
            <div className="px-3 py-3 mt-4 bg-white hover:bg-gray-200 rounded-lg">
                <h2 className='text-lg font-medium text-[#001931]'>{isIn_ProgressData.title}</h2>
                <button onClick={complitBtnHandler} className="text-[16px] text-white font-semibold btn bg-[#02A53B] hover:bg-[#02A53B90] w-full mt-3">Complete</button>
            </div>
        )
};

export default AsideCardShow;