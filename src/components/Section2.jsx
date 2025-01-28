import {useSelector} from "react-redux"

export default function Section2() {
    const frontendData = useSelector((state)=> state.frontendData)

    if(frontendData.isLoading){
      return <p>Loading</p>
    }
    if(frontendData.error){
      return <p>Failed To load Data</p>
    }
  

    return (
      <>
        <div
          className="row2-element-1 md:w-[25%] md:flex md:justify-evenly md:items-center 
          text-gray-200 bg-gardient-box "
        >
          <img src="/img/block.png" ></img>

        </div>

        {/* Summary Resume */}
        {
          frontendData.data.length &&
          <div
            className="row2-element-2 md:w-[45%] max-md:col-span-2 md:py-4 py-6 px-8  text-white text-sm text-justify  bg-gardient-box relative overlay grid place-content-center"
            
          > 
            {/* summary container */}
            <div className="md:overflow-y-scroll w-full md:max-h-40" >
                <p className="p-2">{frontendData.data[0].summary}</p>
               

            </div>
          </div>
        }
        
        

        {/* row 2 element 3 */}
        <div
          className="row2-element-3 md:w-[30%] md:flex md:justify-evenly md:items-center bg-gardient-box text-gray-200
          "
        >
          <img className="max-h-52" src="/img/block4.png" ></img>
        </div>
      </>
    );
  }