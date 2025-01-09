export default function Section1({RajneeshInfo}) {
    // console.log(RajneeshInfo)
    return (
      <>
        <div className="Rajneesh-Info-block bg-gray-700 md:w-[60%] flex md:justify-evenly md:items-center max-md:col-span-2">
            
              <img
              className="Rajneesh-Img lg:w-[30%] w-24 rounded-lg"
              src={RajneeshInfo.img}
              alt={`${RajneeshInfo.fname} ${RajneeshInfo.lname}`}
              title={`${RajneeshInfo.fname} ${RajneeshInfo.lname}`}
              />
              <div className="Rajneesh-Name w-[60%] text-gray-100">
                  <h1 className="lg:text-3xl text-xl">HI, I'm {`${RajneeshInfo.fname}`}</h1>
                  <p className="text-gray-300">
                      {RajneeshInfo.about}
                  </p>
              </div>
        </div>
  
        {/* Rajneesh-Project-AIML */}
        <div
          className="Rajneesh-Project-AIML md:w-[20%] md:flex md:justify-evenly 
          md:items-center "
          style={{ background: "var(--primary-gradient-light)" }}
          >
              Aiml
          </div>
        
          {/* Rajneesh-Project-DEsign */}
        <div
          className="Rajneesh-Img bg-primary-color-light md:w-[20%] md:flex md:justify-evenly  md:items-center"
          style={{ background: "var(--primary-gradient-light)" }}
        >
          Design
  
        </div>
      </>
    );
  }