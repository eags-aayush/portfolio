import React from 'react'
import Language from './language'

const project = ({ title, desc, projectLink, language }) => {
    return (
        <div id='project' className='bg-accent rounded-xl p-5 border-2 border-background-l cursor-default scroll-mt-30'>
            <div className='flex flex-row gap-2 justify-between'>
                <div className='w-7/8 flex flex-col gap-2'>
                    <h1 className='font-bold'>{title}</h1>
                    <h1 className=''>By {desc}</h1>
                </div>
                <div className='w-1/8'>
                    <a href={projectLink} target='_blank'>
                        <img height="25" width="25" src="https://cdn.simpleicons.org/gocd/1f2937" alt='Project Link' />
                    </a>
                </div>
            </div>
            {language}
        </div>
    )
}

export default project
