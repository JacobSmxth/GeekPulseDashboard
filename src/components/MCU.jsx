import { useState, useEffect } from "react";
import axios from "axios"

const MCU = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const {data: response} = await axios.get('https://www.whenisthenextmcufilm.com/api');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false)
        }

        fetchData();
    }, [])



    return (
            <div>
                {loading && <div className="m-10 border-2 border-gray-400 rounded-xl w-75 h-120 flex flex-col items-center justify-center">Loading...</div>}
                {!loading && (
                    
                    <div className="mx-30 mt-10 hover:shadow-xl hover:scale-105 transition-all duration-300 sm:min-w-8/10   bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-center">  
                        <a href="#">
                            <img className="rounded-t-lg" src={data.poster_url} alt={data.title + "poster image"} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${data.title}`}</h5>
                            </a>
                            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">{data.type}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${data.release_date.split("-")[1]}/${data.release_date.split("-")[2]}/${data.release_date.split("-")[0]}`}</p>
                        </div>
                        </div>
                )}
            </div>

    )
}
export default MCU;