export default function Section2({Data}) {
    return (
      <>
        <div
          className="row2-element-1 bg-primary-color-light md:w-[25%] md:flex md:justify-evenly md:items-center"
          style={{ background: "var(--primary-gradient-medium)" }}
        ></div>

        {/* Summary Resume */}
        <div
          className="row2-element-2 bg-primary-color md:w-[45%] md:flex md:justify-evenly md:items-center max-md:col-span-2 px-10 py-4 max-h-52 text-white text-sm text-justify overflow-clip"
          style={{ background: "var(--primary-gradient)"}}
        >
          <p className="">{Data.summary}</p>
          

        </div>
        <div
          className="row2-element-3 bg-primary-color-light md:w-[30%] md:flex md:justify-evenly md:items-center"
          style={{ background: "var(--primary-gradient-medium)" }}
        ></div>
      </>
    );
  }