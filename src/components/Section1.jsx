export default function Section1({RajneeshInfo}) {
    // console.log(RajneeshInfo)
    return (
      <>
        <div className="Rajneesh-Info-block bg-gray-800  smooth-shadow bg-opacity-70 backdrop-blur-lg md:w-[60%] flex md:justify-evenly md:items-center max-md:col-span-2 px-6 py-6">
            
              <img
              className="Rajneesh-Img lg:w-[30%] w-24 rounded-lg"
              src={RajneeshInfo.img}
              alt={`${RajneeshInfo.fname} ${RajneeshInfo.lname}`}
              title={`${RajneeshInfo.fname} ${RajneeshInfo.lname}`}
              />
              <div className="Rajneesh-Name w-[60%] text-gray-100 ">
                  <h1 className="lg:text-3xl text-xl font-semibold">HI, I'm {`${RajneeshInfo.fname}`}</h1>
                  <p className="text-gray-300">
                      {RajneeshInfo.about}
                  </p>
              </div>
        </div>
  
        {/* Rajneesh-Project-AIML */}
        <div
          className="Rajneesh-Project-AIML md:w-[20%] md:flex md:justify-evenly 
          md:items-center text-gray-300 bg-gray-700
           smooth-shadow
          bg-opacity-60 backdrop-blur-lg
          "
          >
              Aiml
          </div>
        
          {/* Rajneesh-Project-DEsign */}
        <div
          className="Rajneesh-Design md:w-[20%] md:flex md:justify-evenly  md:items-center text-gray-300 bg-gray-500 bg-opacity-70
           smooth-shadow backdrop-blur-lg"
          
        >
          Desig
  
        </div>
      </>
    );
  }