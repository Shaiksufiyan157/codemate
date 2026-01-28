import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
                
                {/* Developer Credit */}
                <p className="text-sm font-medium tracking-wide">
                    Developed by <span className="text-indigo-400 font-bold">Shaik Sufiyan</span>
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a 
                        href="https://github.com/Shaiksufiyan157/codemate" 
                        target='_blank' 
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                        aria-label="GitHub"
                    >
                        <FaGithub size={24} />
                    </a>
                    
                    <a 
                        href="https://www.linkedin.com/in/shaik-sufiyan-b31193243/" 
                        target='_blank' 
                        rel="noreferrer"
                        className="text-slate-400 hover:text-[#0077b5] transition-colors duration-200 transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

                {/* Optional Copyright line for professionalism */}
                <p className="text-xs text-slate-600 mt-2">
                    &copy; {new Date().getFullYear()} CodeMate. Open Source Project.
                </p>
            </div>
        </footer>
    );
};