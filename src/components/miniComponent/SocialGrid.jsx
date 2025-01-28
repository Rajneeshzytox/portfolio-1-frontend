import "../../statics/styles/socialGrid.css"

export default function SocialGrid({socialData}) {

  return (
  <>
    {/* grid */}
    <div className="social-grid md:grid-cols-2 md:grid-rows-3 grid-cols-3 grid-rows-2 h-full w-full md:gap-6 gap-5 md:py-4" style={{display:"grid"}}>

    {/* social links */}
    {
        socialData.length?(
            socialData.map((social) =>(

                social.url&&
                <div 
                    key={social.title}
                    className="w-6 aspect-square hover:brightness-125 transition duration-250
                   shadow_icon 
                    
                    "
                    title={social.title}
                >
                    <a href={social.url} >
                        {social.icon?(
                            <img src={`/socialIcon/${social.icon}`} alt={social.title} className="aspect-square"/>
                        ):(
                            <span className="aspect-square inline-block bg-gray-700 bg-opacity-75 rounded-md  px-4 py-2" title={social.title.toLowerCase()}>{social.title[0].toUpperCase()}</span>
                        )}
                    </a>
                </div>
            ))
        ):(
            <p>No DATA</p>
        )

    }
    
    </div>
  </>
  );
}
