import {useSelector} from "react-redux"

// for media base url 
import { serverURL } from "./Admin/Data/api"

export default function Section4() {
  const frontendData = useSelector((s)=>s.frontendData)

  if(frontendData.isLoading){
    return <p>Loading</p>
  }
  if(frontendData.error){
    return <p>Failed To load Data</p>
  }
  
  const awards_and_honors = frontendData.data[0]?.awards_and_honors
  const education = frontendData.data[0]?.education
  const experiences = frontendData.data[0]?.experiences

  const combinedEvent = [
    ...experiences,
    ...education,
    ...awards_and_honors,
  ]

  const eventData = combinedEvent.sort((a, b) => {
    const dateA = a.start_date || a.end_date || ""; 
    const dateB = b.start_date || b.end_date || "";
  
    // Place null dates at the end
    if (!dateA) return 1;
    if (!dateB) return -1;
  
    // Sort by date (ascending order)
    return new Date(dateA) - new Date(dateB);
  });
  
  console.log(eventData);
  
  return (
      <>
        {/* Journey Container */}
        <div
          className="w-full 
          flex lg:flex-col lg:items-center
          bg-gardient-box  relative
          lg:overflow-y-scroll  overflow-y-hidden
          overflow-x-scroll lg:overflow-x-hidden
          *:min-w-full"
        >
          { (eventData.length > 0) && education && experiences && awards_and_honors && (

            /* Journey/Events */
            eventData.map((event)=> (

          <div key={`${event.id} ${event.title}`} className="w-full h-full py-10 relative flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:gap-4 gap-2 lg:px-4">

            {/* event Line */}
            <span className="inline-block w-full h-1 absolute -translate-y-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-700 -translate-x-1/2 z-0
            
            lg:w-1 lg:h-full lg:-translate-y-1/2 lg:left-9
            ">
            </span>
            

            {/* event Icon */}
              <span className="rounded-full aspect-square lg:absolute inline-block w-14 lg:w-10 bg-gray-950 p-4 lg:p-2 z-10">
              <img src={serverURL + event.icon} />
              </span>

            {/*  event Data */}
            <div className="max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center lg:ml-12 w-full">
              <h3 className="font-semibold text-xl capitalize ">{event.title}</h3>
              <h5 className="font-semibold text-sm opacity-60">{event.start_date + '-' + event.end_date}</h5>
              <p className="opacity-85 truncate line-clamp-3 text-wrap text-ellipsis  w-full max-lg:w-1/2">{event.description}</p>

            </div>
          </div>
            ))
          )}
        </div>

        <div className="lg:h-[30%] md:w-[40%] max-md:hidden grid place-content-center lg:w-full bg-gardient-box">some random Quote</div>
      </>
    );
  }