import { useEffect, useState } from "react";
import BrandPreviweCard from "./BrandPreviweCard";

const BrandPreviwe = () => {
    const [previweData,setPreviweData] = useState([])

    useEffect(()=>{
        fetch('brandPreviwe.json')
        .then(res=>res.json())
        .then(data=>setPreviweData(data))
    },[])
    console.log(previweData);
    return (
        <div className="flex justify-between gap-4 bg-[rgb(236, mx-auto py-8 w-10/12 text-center 227)] 234,">
            {
                previweData.map(preview=><BrandPreviweCard key={preview.id} data={preview}></BrandPreviweCard>)
            }
        </div>
    );
};

export default BrandPreviwe;