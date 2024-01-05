import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function InsertData() {
    const [dataResponse, setDataResponse] = useState()
    useEffect(() => {
        const apiUrl = "http://localhost:3001/users";
        const user = {
            id: 1,
            name: 'sakthi',
            email: 'sakthi@gmail.com'
        }
        axios.post(apiUrl, user)
            .then((response) => {
                setDataResponse(response.data)
            })
            .catch((error) => {
                console.error(error);
            })
    })
    return (
        <div>
            <p>
                {
                    JSON.stringify(dataResponse, null)
                }
            </p>

        </div>
    )
}
