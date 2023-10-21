// this is a custom hook

import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])

    return data
}

export default useCurrencyInfo;

// fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
//     .then((res)=> res.json())
//     .then((data)=>{console.log(data.usd.inr)})