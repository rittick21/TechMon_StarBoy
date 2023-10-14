import React from 'react'
import { useParams } from 'react-router-dom' //useParams hook can access the id from url-path

const Brand = () => {
  const params = useParams();  
  return (
    <div>
      <h1>#{params.id}</h1>
    </div>
  )
}

export default Brand
