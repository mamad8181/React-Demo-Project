import { useCallback, useState } from "react";



const useFetch = () => {

    const [isLoading, setIsLoading] = useState()
    const [error, setError] = useState()

    const sendRequest = useCallback(async ({url, method = 'GET', headers = {}, body}, setData) => {
            setIsLoading(true)
            setError(null)
            try{
                const response = await fetch(url, {
                    method,
                    headers,
                    body : body ? JSON.stringify(body) : null
                })
                if(!response.ok){
                    throw new Error(`Request falid. ${response.status}`)
                }
                const data = await response.JSON()
                console.log(data)
                setData(data)
            }
            catch(error){
                setError(error.message)
            }
            setIsLoading(false)
    },[])


    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useFetch;