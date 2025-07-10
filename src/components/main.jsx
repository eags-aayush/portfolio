import React from 'react'

const main = ({site, link, alt}) => {
  return (
    <div>
      <div id='site'>
        <a tabIndex={0} href={link} target="_blank" className='cursor-pointer'>
          <img height="30" width="30" src={site} alt={alt} />
        </a>
      </div>
    </div>
  )
}

export default main
