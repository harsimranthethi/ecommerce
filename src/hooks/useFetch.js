import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = async (url) =>{


const [data,setData] = useState(null)
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const response = await makeRequest.get(url, 
            {
              headers: {
                Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN, // Add a space after "Bearer"
              },
            });
            console.log(response.data);
            setData(response.data.data); // Assuming your API returns an array of products
          } catch (err) {
            setError(true);
          }
          setLoading(false);
        };
        
        fetchData();
      }, [url]);

      return {data,loading,error};
};

export default useFetch;
