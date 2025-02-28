import { useState, useEffect } from "react";
import axios from "axios"

const MCU = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // axios.get('https://www.whenisthenextmcufilm.com/api')
        //     .then(res => {
        //         setPersons(res.data);
        //         console.log(res.data)
        //     })

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
            <div>
                {loading && <div className="border-2 w-60 p-7 flex flex-col text-black items-center">Loading...</div>}
                {!loading && (
                    <div className="border-2 w-60 p-7 flex flex-col text-black items-center">
                        <h2>{data.title}</h2>
                        <img className="w-1/2" src={data.poster_url} alt={data.title + "poster image"} />
                        <h3></h3>
                    </div>
                )}
            </div>
            
        </div>
    )
}
export default MCU;