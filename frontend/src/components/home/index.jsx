export const Hero=()=>{
    return(
        <>
         {/* Header Section */}
        <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-semibold">Your Personal SDE Prep Tracker</h1>
        <p className="mt-4 text-lg">
          Stay organized, consistent, and connected while preparing for your dream role
        </p>
      </header>

      {/* Main Features Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Smart DSA Tracker */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Smart DSA Tracker</h3>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Each problem gets its own card</li>
              <li>✅ Key data structures & algorithms</li>
              <li>✅ Easy daily revision</li>
            </ul>
          </div>

          {/* CS Fundamentals Hub */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">CS Fundamentals Hub</h3>
            <p className="text-gray-700">
              Add and organize your favorite resources for OS, DBMS, CN, etc.
            </p>
          </div>

          {/* Daily Planner */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Virtual Sticky Notes (Daily Planner)</h3>
            <p className="text-gray-700">
              Plan your day, track topics — all in one spot (private to you)
            </p>
          </div>
        </div>
      </section>
      </>
    )
}