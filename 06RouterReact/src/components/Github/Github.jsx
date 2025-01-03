import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // ******************* OR

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch("https://api.github.com/users/aashishsehrawat")
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // }, [])

  return (
    <div className='w-full flex gap-3 flex-col justify-center items-center'>
      <div className='text-3xl'>Github repo: {data.public_repos}</div>
      <div>
        <img src={data.avatar_url} alt="" />
      </div>
    </div>
  )
}

export default Github

export const loaderGithubInfo = async () => {
  const response = await fetch("https://api.github.com/users/aashishsehrawat");
  return response.json();
}
