import { randomColor } from "../Admin/miniCompoenets/randomColor";


const ProjectCard = ({project, active}) => {

    const theme = randomColor()
   
    const handleClickCard = () => {
      active(pre=>({...pre, active:true, projectData:project}))
    }

    

  return (
    <>
        {/* // Project Card */}
        <div
          className=" max-w-72 min-w-52 rounded-lg relative bg-gray-900 overflow-clip flex flex-col items-center justify-center gap-4 pb-4"
          style={{boxShadow: `0px 0px 50px 0px ${theme}`}}
          onClick={handleClickCard}
        >

          {/* CARD CONTENT */}
          
            {/* Image */}
            {
              true &&
            <div className="aspect-square w-full bg-slate-800 z-10">
            </div>
            }
                

            {/* Card Title */}
            <h3 
              className="leading-tight font-semibold font-sans text-md capitalize px-4 text-ellipsis truncate line-clamp-2 text-pretty "
              style={{color: theme}}>
                {project.title}
              </h3>
          
        </div>
        
    </>
  );
};



export default ProjectCard;