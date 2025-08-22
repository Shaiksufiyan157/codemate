import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer=()=>{
    return (
    <footer className="bg-blue-600 text-white py-6 text-center mt-5 bottom-0">
        <p>Developed By Shaik Sufiyan</p>
        <div>
          <a className='mr-5' href="https://github.com/Shaiksufiyan157/codemate">
          <GitHubIcon/>
          </a>
          <LinkedInIcon/>
        </div>
      </footer>
    )
}