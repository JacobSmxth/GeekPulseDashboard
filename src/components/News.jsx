import { useState, useEffect } from "react";
import axios from "axios"
import { div } from "framer-motion/client";

const News = () => {
    // https://newsdata.io/api/1/latest?apikey=${apiKey}
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([])
    const apiKey = import.meta.env.VITE_API_KEY;


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const {data: response} = await axios.get(`https://newsdata.io/api/1/latest?apikey=${apiKey}&category=technology&qInMeta=innovation&language=en&size=6`);
                setArticles(response.results || []);
                console.log(response.results)
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false)
        }

        fetchData();
    }, [])

    if (loading) {
        return <div className="text-8xl text-gray-300 flex items-center justify-center">Loading...</div>
    }

    if(!articles.length) {
        return <div className="text-4xl text-gray-300 flex items-center justify-center">No Articles Found</div>
    }

    return (
        <div className="grid mt-10 mx-20 max-w-full max-h-full sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-3 gap-8 my-0 content-start">
            {articles.slice(0, 6).map((article) => (
                <div key={article.article_id} className="relative min-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href={article.link}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title.length > 50
                    ? article.title.slice(0,45) + "..."
                    : article.title}</h5>
                    </a>
                    <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">{article.description > 100
                        ? article.description.slice(0, 95) + "..."
                    : article.description}</p>
                
                        
                    <p className="absolute bottom-0 left-0 p-4 text-center text-gray-200">Read more @ <a href={article.link} target="_blank" className="text-gray-400 hover:border-b-gray-400 border-2 border-transparent transition duration-275">{article.source_name || article.source_id}</a></p>

                </div>
            ))}
        </div>
    )
}

export default News;