import './App.css'
import Navbar from './components/navbar'
import Main from './components/main'
import Language from './components/language'
import Certificate from './components/certificate'
import Project from './components/project'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar/>
      
      <div name='Main section' className='dark flex flex-col justify-center items-center mb-7'>
        <img src='/src/assets/logo.png' alt='Profile picture' className='rounded-full w-25' />
        <h1 className='font-bold text-xl'>Aayush Laddha</h1>
        <span>@imagiwaeve</span>
        <span className={`bg-accent mt-3 mb-5 p-1 px-3 rounded-full border-1 border-text cursor-default`}>Full Stack Web Dev</span>
        <div className='flex gap-5'>
        <Main site='https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000' link='https://instagram.com/imagiwaeve' alt='Instagram'/>
        <Main site='https://img.icons8.com/?size=100&id=13930&format=png&color=000000' link='https://linkedin.com/in/imagiwaeve' alt='Linkedin'/>
        <Main site='https://img.icons8.com/?size=100&id=14h574ySQ7kG&format=png&color=1DBF73' link='https://fiverr.com/imagiwaeve' alt='Fiverr'/>
        <Main site='https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000' link='mail:imagiwaeve@gmail.com' alt='Gmail'/>
        </div>
      </div>

      <div name='Languages known' className='flex flex-col'>
        <Language color={`bg-primary`} title='Frontend' language={['html5', 'css', 'JavaScript', 'TailwindCSS', 'React']} />
        <Language color={`bg-primary`} title='Backend' language={['JavaScript', 'NodeDotJs', 'Express', 'Mongoose', 'NextDotJs']} />
        <Language color={`bg-primary`} title='Database' language={['Mongodb']} />
        <Language color={`bg-primary`} title='Other' language={['Gradle', 'Python', 'C', 'C++']} />
      </div>

      <div name='Certificates recieved' className={`flex flex-col gap-3 bg-primary p-5 rounded-xl mb-5`}>
        <h1 className='ml-5 font-bold text-2xl'><u>Certificates</u></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Certificate title='Web Development - Netflix Clone' certifiedBy='Newton School of Technology' issueDate='Issued March 2025' credentialLink='https://my.newtonschool.co/course/6z72zh12mgbt/certificate/7w9p06yrnhmr/verify?utm_source=LinkedIn&utm_medium=shared-by-aayushladdha001&utm_campaign=newton-headstart-certificate-share&trk=public_profile_see-credential' />
          <Certificate title='IIT Kanpur Antaragni Code Championship 2024' certifiedBy='United Latino Students Association' issueDate='Issued June 2024' credentialLink='https://certificate.givemycertificate.com/c/857fa2cb-5d17-43a5-81a8-18a087c59717' />
          <Certificate title='Young Inovator Internship Challenge 2' certifiedBy='Scaler School of Technology' issueDate='Issued October 2024' credentialLink='https://drive.google.com/file/d/119VfJkgfs-ffsZ9naNHx3KTKybbfHoSZ/view' />
        </div>
      </div>

      <div name='Projetcs made' className={`flex flex-col gap-3 bg-primary p-5 rounded-xl mb-5`}>
        <h1 className='ml-5 font-bold text-2xl'><u>Projects</u></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Project title='Color Palette Generator' desc='The Color Palette Generator is a responsive web app built with HTML, CSS, and JavaScript that allows users to generate random color palettes based on different color harmony rules like monochrome, analogous, complementary, and more. Each palette displays multiple colors with their hex codes, making it a handy tool for designers and developers looking for quick visual inspiration and consistent color schemes.' projectLink='https://eags-aayush.github.io/JS-Practice/Color%20Palette/' language={<Language language={['html5', 'css', 'JavaScript']} />} />
          <Project title='JanSamadhan' desc='JanSamadhan is a location-based public issue reporting platform developed for the IIT Kanpur Antaragni Championship 2024. It empowers citizens to report local problems like potholes, streetlight failures, or suggest public improvements directly from their current location. With features like live location tracking, an interactive community map, and simplified submission forms, JanSamadhan bridges the gap between communities and authorities. Its clean interface and transparent system promote civic engagement, ensuring every voice contributes to real, trackable change.' projectLink='https://eagsaayush.pythonanywhere.com/' language={<Language language={['html5', 'css', 'JavaScript', 'python']} />} />
        </div>
      </div>

      <div id='contact' name='Appointment booking' className='bg-white rounded-xl w-full scroll-mt-15'>
        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1VWV9vPzYlTTOvJhCSGCIZTza3mn79PFdv4qOb5Hmqrh8reWqqHQsXXJ-oq2mWg-033rhnbpAp?gv=true" style={{border: 0}} width="100%" height="600"></iframe>
      </div>

      <Footer/>
    </>
  )
}

export default App
