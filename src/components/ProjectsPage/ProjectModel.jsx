
export default function ProjectModel({children, setModelActive}) {
    
  // Close model
  const handleCloseClick = () => {
    console.log("close")
    setModelActive(false)
  };

  return (
    <>
      <div className="z-10 p-10 fixed top-0 left-0 font-sans border-none overflow-clip ">
        <div className="bg-gray-800 rounded-lg p-4 max-h-full overflow-y-scroll relative shadow-lg shadow-gray-900">
          <button
            className="absolute top-10 right-10"
            onClick={() => handleCloseClick()}
          >
            close
          </button>

        <div className="mt-12">
            {children}
        </div>
          
          
        </div>
      </div>
    </>
  );
}
