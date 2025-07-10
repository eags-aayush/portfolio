import React from 'react'

const certificate = ({title, certifiedBy, issueDate, credentialLink}) => {
  return (
    <div id='certificate' className='bg-accent rounded-xl p-5 flex flex-row gap-2 justify-between border-2 border-background-l cursor-default scroll-mt-30'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold'>{title}</h1>
            <h1 className=''>By {certifiedBy}</h1>
            <h1 className=''>{issueDate}</h1>
        </div>
        <div className='w-1/10'>
            <a href={credentialLink} target='_blank'>
                <img height="25" width="25" src="https://cdn.simpleicons.org/startpage/1f2937" alt='Credential Search'/>
            </a>
        </div>
    </div>
  )
}

export default certificate