
export function Error({title}) {
    title = title?title:"Something went wrong" 
    return(
        <>
            <div className="size-full min-h-screen flex justify-center items-center flex-col text-gray-300 bg-black bg-opacity-80 text-center">
                <h1 className="md:text-3xl text-xl font-semibold leading-tight capitalize">😔 | {title}</h1>
                <p className="text-gray-400">Try again after some time</p>
                <button className="button" onClick={()=>window.location.reload()}>Reload</button>
            </div>
        </>
    )
}