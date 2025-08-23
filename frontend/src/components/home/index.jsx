import { useState ,useEffect, use} from "react"
import { Link } from "react-router-dom";
import Navbar from "../navbar/index2";
import {useLocation} from 'react-router-dom'
export const Hero=()=>{
  const [headerText,setHeaderText]=useState('');
  let idx=1;
  const text="Your Ultimate Companion of your Coding Journey"
  useEffect(()=>{
    showText()
  },[])
  function showText(){
    setHeaderText(text.slice(0,idx))
    idx++;

    setTimeout(showText,100)
}

    return(
        <>
         {/* Header Section */}
         <div>
        <header className="bg-blue-600 text-white py-5 text-center">
        <h1 className="text-4xl font-semibold">CODEMATE</h1>
        <p className="mt-4 text-lg">
          {/* Your Ultimate Companion of your Coding Journey */}
          {headerText}
        </p>
      </header>
      </div>

      {/* Main Features Section */}
      <section className="px-5 flex  flex-col">
         <div className="max-w mx-auto mb-8">
            <div className="flex justify-center gap-4 mb-8">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                 <Link to={'/problems'}>view problems</Link> 
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                 <Link to={'/sheets'}> view dsa sheet</Link>
                </button>
            </div>
        </div>


        <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 flex items-center flex-col">
                <p className="text-gray-800 leading-relaxed text-lg block text-center">
                    CodeMate Helps to Ace your Techincal Interview by Developing your personal DSA CheatSheet.
                </p>
                <p className="text-gray-800 leading-relaxed text-lg block text-cente">This Helps you to Enhance your Problem Solving Ability

                </p>
                
            </div>
        </div>
      </section>
      </>
    )
}