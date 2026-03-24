'use client'
import React, { useState } from 'react'

import Heading from './sub/Heading'
import Question from './sub/Question'
import { questions } from "@/app/assets"

export const Questions = () => {

  return (
    <div id='questions' className='py-0 pt-50 sm:py-20'>
        <Heading text={"Questions & Answer"}></Heading>
        <div>
            <ul className='flex flex-col gap-y-3'>
              {questions.map((questiond, i) => (
                 <Question key={i} data={questiond} index={i}></Question>
              ))}
            </ul>
        </div>
    </div>
  )
}
export default Questions