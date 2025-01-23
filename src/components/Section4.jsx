import {useSelector} from "react-redux"

export default function Section4() {
  const eventData = useSelector(s=>s.frontendData.journey)
    return (
      <>



        {/* Journey Container */}
        <div
          className="w-full lg:h-[60%] flex lg:flex-col-reverse
          lg:items-center bg-gardient-box lg:overflow-x-hidden overflow-x-scroll overflow-y-hidden lg:overflow-y-scroll
          *:min-w-full relative lg:w-full md:w-[70%]
          "
        >
          {eventData && (

            /* Journey/Events */
            eventData.map((event)=> (

          <div className="w-full h-full py-10 relative flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:gap-4 gap-2 lg:px-4">

            {/* event Line */}
            <span className="inline-block w-full h-1 absolute -translate-y-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-700 -translate-x-1/2 z-0
            
            lg:w-1 lg:h-full lg:-translate-y-1/2 lg:left-9
            ">
            </span>
            

            {/* event Icon */}
              <span className="rounded-full aspect-square lg:absolute inline-block w-14 lg:w-10 bg-gray-950 p-4 lg:p-2 z-10">
              <img src={`/icons/${event.icon}`} />
              </span>

            {/*  event Data */}
            <div className="max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center lg:ml-12 w-full">
              <h3 className="font-semibold text-xl capitalize ">{event.title}</h3>
              <h5 className="font-semibold text-sm opacity-60">{event.startDate + '-' + event.endDate}</h5>
              <p className="opacity-85 truncate line-clamp-3 text-wrap text-ellipsis  w-full max-lg:w-1/2">{event.description}</p>

            </div>
          </div>
            ))
          )}
        </div>


        {/* contact container */}
        <div
          className="Contact-Container w-full lg:h-[40%] lg:w-full md:w-[30%] bg-gardient-box"
          
        ></div>
      </>
    );
  }