import "../../statics/styles/Loading.css";

export function Loading({title}) {
  title = title?title:"Loading..."
  return (
    <>
        <div className="fixed size-full text-gray-200 z-30 grid place-content-center md:text-3xl text-xl font-semibold leading-tight">
            {title}
        </div>
      <main
        className="
            MainHomePage p-2 bg-gray-900 grid max-w-full min-h-screen gap-3 
            md:*:flex *:grid *:md:flex-row *:gap-3 *:md:justify-between
            *:*:bg-gray-800 *:*:animate-pulse
            "
      >
        <section className="section1 max-md:grid-cols-2 *:md:h-auto *:min-h-52 *:gap-3 *:rounded-2xl">
          <div
            className="row1-element-1 bg-opacity-70 md:w-[60%] flex md:justify-evenly md:items-center max-md:col-span-2 max-md:px-6 md:py-0  py-6 
           "
          ></div>
          <div
            className="Rajneesh-Project-AIML md:w-[20%] md:flex md:justify-evenly 
          md:items-center "
          ></div>
          <div className="Rajneesh-Img -light md:w-[20%] md:flex md:justify-evenly  md:items-center"></div>
        </section>

        {/* Section 2 */}
        <section className="section2 max-md:grid-cols-2 *:gap-3 *:rounded-2xl *:md:h-auto *:min-h-52">
          <div className="row2-element-1 -light md:w-[25%] md:flex md:justify-evenly md:items-center"></div>
          <div className="md:w-[45%] md:flex md:justify-evenly md:items-center max-md:col-span-2 px-10 py-4 max-h-52 text-white text-sm text-justify overflow-clip"></div>
          <div className="row2-element-3 -light md:w-[30%] md:flex md:justify-evenly md:items-center"></div>
        </section>

        {/* Section 3 */}
        <section className="section3 max-md:grid-cols-2 max-md:grid-rows-3 *:gap-3 *:rounded-2xl *:md:h-auto *:min-h-52">
          <div className="row3-element-1 bg-gray-700 md:w-[40%] md:flex flex-col md:justify-evenly md:items-center max-md:col-span-2"></div>
          {/* skills ends */}

          <div
            className="row3-element-2 md:w-[20%] md:flex md:justify-evenly 
                              md:items-center"
          ></div>

          <div className="row3-element-3 md:w-[40%] flex md:items-center md:justify-start overflow-clip md:flex-row flex-col max-md:row-span-2 "></div>
        </section>

        {/* Section 4 */}
        <section className="section4 md:h-full lg:flex-col md:items-center md:justify-center md:*:h-full *:min-h-52 *:gap-3 *:rounded-2xl">
          <div className="Rajneesh-Img bg-gray-700 w-full lg:h-[40%] lg:w-full md:w-[40%]"></div>
          <div
            className="Rajneesh-Img bg-primary-color w-full lg:h-[60%] md:flex md:justify-evenly 
            md:items-center"
          ></div>
        </section>
      </main>
    </>
  );
}
