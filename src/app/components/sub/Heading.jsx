import React from 'react'

export const Heading = ({text}) => {
  return (
    <div className='text-4xl max-sm:text-2xl font-bold text-gray-600 mb-14 self-start  dark:text-white transition-colors'>{text}</div>
  )
}
export default Heading