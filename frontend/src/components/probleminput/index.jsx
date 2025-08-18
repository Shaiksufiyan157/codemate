import  { useState} from 'react';
import { useDispatch} from 'react-redux';
import { addproblem } from '../../slices/problemInputSlice';
import {v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom';
export const InputData = () => {
  const [approach1, setApproach1] = useState('');
  const [approach2, setApproach2] = useState('');
  const [ds, setDs] = useState('');
  const [algo, setAlgo] = useState('');
  const [problemStatement, setProblemStatement] = useState('');

  const navigate=useNavigate()

  const dispatch=useDispatch()
  const handleSubmit = () => {
    const newProblem = {
      id:uuid(),
      ProblemStatement: problemStatement,
      Approach: approach2.length>0 ? [approach1,approach2]:[approach1],
      DataStructure: ds.split(',').map(item => item.trim()),
      Algo: algo.split(',').map(item => item.trim())
    };

    dispatch(addproblem({
      problem:newProblem}))



    // Clear the form fields after submitting
    setProblemStatement('');
    setApproach1('');
    setApproach2('');
    setDs('');
    setAlgo('');
    navigate('/problems')
  };

  return (


    <>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/95 rounded-lg p-4">
        <div className="md:col-span-2">
          <label htmlFor="problemStatement" className="block text-sm font-medium text-gray-700">
            Problem Statement
          </label>
          <input
            id="problemStatement"
            type="text"
            value={problemStatement}
            onChange={(e) => setProblemStatement(e.target.value)}
            placeholder="Describe the problem statement..."
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none" required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="approach1" className="block text-sm font-medium text-gray-700">
            Approach (Paragraph 1)
          </label>
          <textarea
            id="approach1"
            rows={2}
            value={approach1}
            onChange={(e) => setApproach1(e.target.value)}
            placeholder="Write the first paragraph of your approach..."
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
         required />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="approach2" className="block text-sm font-medium text-gray-700">
            Approach (Paragraph 2 – optional)
          </label>
          <textarea
            id="approach2"
            rows={2}
            value={approach2}
            onChange={(e) => setApproach2(e.target.value)}
            placeholder="Second paragraph (optional)..."
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="ds" className="block text-sm font-medium text-gray-700">
            Data Structures (comma-separated)
          </label>
          <input
            id="ds"
            type="text"
            value={ds}
            onChange={(e) => setDs(e.target.value)}
            placeholder="e.g., Array, Hash Map, Heap"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
         required />
        </div>

        <div>
          <label htmlFor="algo" className="block text-sm font-medium text-gray-700">
            Algorithms (comma-separated)
          </label>
          <input
            id="algo"
            type="text"
            value={algo}
            onChange={(e) => setAlgo(e.target.value)}
            placeholder="e.g., Binary Search, DP, BFS"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
          required/>
        </div>

        <div className="md:col-span-2 flex items-center gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 rounded-md bg-[#316878] px-4 py-2 text-sm font-medium text-white shadow"
          >
            Save Problem
          </button>
        </div>
      </div>

    </>

  )
}