import { randomColor } from "../Admin/miniCompoenets/randomColor";

export default function CardDetails({ projectData, setActiveCard }) {
  // Close model
  const handleCloseClick = () => {
    setActiveCard((pre) => ({ ...pre, active: false, projectData: null }));
  };

  return (
    <>
      <div className="w-screen h-screen z-10 bg-gray-900 bg-opacity-90 p-10 fixed top-0 left-0 font-sans">
        <div className="bg-gray-800 rounded-lg p-10 max-h-full relative pt-20 overflow-y-scroll">
          <button
            className="absolute top-10 right-10"
            onClick={() => handleCloseClick()}
          >
            close
          </button>

          {/* CONTENt */}
          {!projectData ? (
            <p>😔 NO DATA</p>
          ) : (
            <div>
              <h2 className="text-2xl capitalize leading-tight font-semibold mb-4">
                {projectData.title}
              </h2>
              <p className="leading-relaxed text-pretty ">
                {projectData.description}
              </p>

              {/* TAGS */}
              <div className="my-4 flex flex-wrap gap-2">
                {projectData.tags?.map((tag) => (
                  <span
                    className=" px-4  cursor-not-allowed rounded "
                    style={{ border: `2px solid ${randomColor()}` }}
                    key={tag.id}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              {/* Categories */}
              <div className="my-4 flex flex-wrap gap-2">
                {projectData.categories?.map((category) => (
                  <span
                    className="px-6 rounded py-1 cursor-not-allowed"
                    style={{ border: `2px solid ${randomColor()}` }}
                    key={category.id}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
