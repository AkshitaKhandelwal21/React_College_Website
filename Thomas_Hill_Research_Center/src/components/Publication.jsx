import React from 'react'
import ReadMoreButton from './ReadMoreButton'
const publicationData = [
  {
    "heading": "Heading 1",
    "desc": "lorem ipsum doler amet 1."
  },
  {
    "heading": "Heading 2",
    "desc": "lorem ipsum doler amet 2."
  },
  {
    "heading": "Heading 3",
    "desc": "lorem ipsum doler amet 3."
  },
  {
    "heading": "Heading 4",
    "desc": "lorem ipsum doler amet 4."
  },
  {
    "heading": "Heading 5",
    "desc": "lorem ipsum doler amet 5."
  }
]

const Publication = (props) => {
  return (
    <div className='bg-gray-300'>
      {/* <h1 className='text-2xl font-bold p-12 text-center'>Latest Publications</h1> */}
      <div className='flex justify-center'>
        <div className='w-200 bg-red-100 text-center'>
          <h2>{props.heading}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
      <ReadMoreButton />
      
    </div>
  )
}

export default Publication
