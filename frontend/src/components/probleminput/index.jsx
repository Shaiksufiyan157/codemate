import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addproblem } from "../../slices/problemSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export const InputData = () => {
  const [approach1, setApproach1] = useState("");
  const [approach2, setApproach2] = useState("");
  const [ds, setDs] = useState("");
  const [algo, setAlgo] = useState("");
  const [problemStatement, setProblemStatement] = useState("");

  const [errors, setErrors] = useState({ ds: "", algo: "" });

  const formRef = useRef(null);
  const dsRef = useRef(null);
  const algoRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const parseList = (str) =>
    str
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  const onSubmit = (e) => {
    e.preventDefault();

    // Run built-in HTML5 checks (required/minLength/pattern)
    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Custom checks for comma-separated fields
    const dsList = parseList(ds);
    const algoList = parseList(algo);

    if (dsList.length === 0) {
      setErrors({ ds: "Enter at least one data structure.", algo: "" });
      dsRef.current?.focus();
      return;
    }
    if (algoList.length === 0) {
      setErrors({ ds: "", algo: "Enter at least one algorithm." });
      algoRef.current?.focus();
      return;
    }

    setErrors({ ds: "", algo: "" });

    const newProblem = {
      id: uuid(),
      ProblemStatement: problemStatement.trim(),
      Approach: approach2.trim().length > 0 ? [approach1.trim(), approach2.trim()] : [approach1.trim()],
      DataStructure: dsList,
      Algo: algoList,
    };

    dispatch(addproblem({ problem: newProblem }));

    // Reset
    setProblemStatement("");
    setApproach1("");
    setApproach2("");
    setDs("");
    setAlgo("");
    navigate("/problems");
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/95 rounded-lg p-4">
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
          required
          minLength={5}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
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
          required
          minLength={5}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
        />
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
          ref={dsRef}
          onChange={(e) => {
            setDs(e.target.value);
            if (errors.ds) setErrors((x) => ({ ...x, ds: "" }));
          }}
          placeholder="e.g., Array, Hash Map, Heap"
          required
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${
            errors.ds ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.ds && <p className="mt-1 text-xs text-red-600">{errors.ds}</p>}
      </div>

      <div>
        <label htmlFor="algo" className="block text-sm font-medium text-gray-700">
          Algorithms (comma-separated)
        </label>
        <input
          id="algo"
          type="text"
          value={algo}
          ref={algoRef}
          onChange={(e) => {
            setAlgo(e.target.value);
            if (errors.algo) setErrors((x) => ({ ...x, algo: "" }));
          }}
          placeholder="e.g., Binary Search, DP, BFS"
          required
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${
            errors.algo ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.algo && <p className="mt-1 text-xs text-red-600">{errors.algo}</p>}
      </div>

      <div className="md:col-span-2 flex items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-[#316878] px-4 py-2 text-sm font-medium text-white shadow"
        >
          Save Problem
        </button>
      </div>
    </form>
  );
};
