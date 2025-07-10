import '../App.css'

const language = ({ color, title, language }) => {

  return (
    <div id='language' className={`${color} text-text rounded-xl p-5 flex flex-col gap-3 mb-5 scroll-mt-20`}>
      <h1 className='ml-5 font-bold text-2xl'><u>{title}</u></h1>
      <div className='flex flex-row gap-3 flex-wrap'>
        {language.map((lang, index) => (
          <span key={index} tabIndex={0} className='languageSpans'>
            <img height="20" width="20" src={`https://cdn.simpleicons.org/${lang}/1f2937`} alt='Language Icons'/>
            {lang.toUpperCase().replace("DOT", ".")}
          </span>

        ))}
      </div>
    </div>
  )
}

export default language
