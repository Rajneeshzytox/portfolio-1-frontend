import "../../statics/styles/socialGrid.css"

export default function SocialGrid() {

    const socialData = [
        {id:1, text:"instagram", icon:"instagram.png", url: "#"},
        {id:2, text:"github", icon:"github.png", url: "#"},
        {id:3, text:"linkedin", icon:"linkedin.png", url: "#"},
        {id:4, text:"twitterX", icon:"twitter.png", url: "#"},
        {id:5, text:"whatsApp", icon:"whatsapp.png", url: "#"},
        {id:6, text:"facebook", icon:"facebook.png", url: "#"},
    ]


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
                    key={social.text}
                    className="w-6 aspect-square hover:brightness-125 transition duration-250
                   shadow_icon 
                    
                    "
                    title={social.text}
                >
                    <a href={social.url} >
                        {social.icon?(
                            <img src={`/socialIcon/${social.icon}`} alt={social.text} className="aspect-square"/>
                        ):(
                            <p>{social.text}</p>
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
