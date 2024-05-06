import React from 'react'
import Star from "../../assets/star.svg"

export default function Rating({Rating}) {
const star = Array(Rating).fill(Star)
  return (
    <div className="flex items-center space-x-1 mb-5">
        {star.map((start,index)=>(
            <img key={index} src={Star} width="14" height="14" alt="" />
        ))}
    </div>
  )
}
