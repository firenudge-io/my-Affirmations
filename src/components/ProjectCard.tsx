import { ReadURL } from "../constants/URLS";
import { useState } from "react";
import { Spinner } from "flowbite-react";

export const ProjectCard = () => {

    const [num, setNum] = useState(0);
    const [max, setMax] = useState(0);
    const [head, setHead] = useState("");
    const [body, setBody] = useState("");

    const fetchData = async () => {
        const response = await fetch(ReadURL);
        const values = await response.json();

        const Archives = values.Archives;
        setHead(Archives.head);
        setBody(Archives.body);

        // LENGTH OF DICTIONARY
        setMax(Object.keys(Archives.head).length - 1);
    }
    fetchData();

    return (
        <div className="w-3/4 lg:w-10/12 bg-gray-50 dark:bg-gray-800 text-center p-10 shadow-md shadow-gray-200 dark:shadow-gray-600 rounded-xl mx-auto">

            {
                head.length === 0 ?
                    <Spinner />
                    :
                    <div>
                        <h1 className="text-3xl lg:text-6xl font-mono font-bold">
                            {head[num]}
                        </h1>

                        <p className="text-xl lg:text-3xl font-serif font-normal mt-6">
                            {body[num]}
                        </p>

                        <div className="flex flex-row justify-around mt-10">
                            {
                                num === 0 ?
                                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-300 bg-gray-100 rounded-lg border border-gray-200  dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 cursor-not-allowed invisible" disabled>
                                        Prev
                                    </button>
                                    :
                                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        onClick={() => {
                                            if (num > 0) {
                                                setNum(num - 1);
                                            }
                                        }}>
                                        Prev
                                    </button>
                            }


                            {
                                num === max ?
                                    <button type="button" className="text-gray-400 bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 cursor-not-allowed invisible" disabled>
                                        Next
                                    </button>
                                    :
                                    <button type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                                        onClick={() => {
                                            if (num < max) {
                                                setNum(num + 1);
                                            }
                                        }}>
                                        Next
                                    </button>
                            }
                        </div>
                    </div>
            }
        </div>
    )
}