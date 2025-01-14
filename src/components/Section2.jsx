export default function Section2({Data}) {
    return (
      <>
        <div
          className="row2-element-1 md:w-[25%] md:flex md:justify-evenly md:items-center bg-gray-700 smooth-shadow text-gray-200"
          
        ></div>

        {/* Summary Resume */}
        <div
          className="row2-element-2 md:w-[45%] md:flex md:justify-evenly md:items-center max-md:col-span-2 md:p-10 py-6 px-8 max-h-52 text-white bg-gray-800 smooth-shadow text-sm text-justify overflow-hidden "
          
        >
          <p className="">{Data.summary}</p>
          

        </div>
        <div
          className="row2-element-3 md:w-[30%] md:flex md:justify-evenly md:items-center bg-gray-600   smooth-shadow text-gray-200"
          
        ></div>
      </>
    );
  }