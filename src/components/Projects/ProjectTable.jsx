// import { ProjectData } from "../../services/myData";
import { fetchProjects, delProject } from "../../services/api";
import { useState, useEffect } from "react";

function TableHeadingText(){
    const table_heading_data = [
        {icon: '#', text: 'S.no'},
        {icon: 'N', text: 'Name'},
        {icon: 'D', text: 'Discription'},
        {icon: 'S', text: 'Status'},
        {icon: '#', text: 'Tag'},
        {icon: 'C', text: 'Categories'},
        {icon: '❌', text: 'Delete'},
        {icon: 'U', text: 'Update'},
    ]
return (
    <>

    <tr className="border-b-[1px] border-b-gray-200">
        {table_heading_data.map((table_heading) => (
            <th className="text-sm text-gray-400 font-normal min-w-52 text-left pl-4" key={table_heading.text}>
            <span className="Table-Heading-icon">{table_heading.icon}</span>
            <span>{table_heading.text}</span>
          </th>
        ))}
    </tr>

    </>
)
}






export default function ProjectTable() {
  const [projectData, setProjectData] = useState([])
  const [UpdateActive, setUpdateActive] = useState(-1)
  
  // for Update Value : 
  const [ActiveProjectData, setActiveProjectData] = useState({title:'', description:''})

  // get all projects (send get req)
  const getprojects = async () => {
    try{
      const projects = await fetchProjects()
      setProjectData(projects)
    } catch (err){
      console.log(err)
    }
  }

  // on load, set projects data state
  useEffect(()=>{
    getprojects()
  }, [])


  // send Delete Project req 
  const deleteProject = (e,id) =>{
    // alert(id)
    if(delProject(Number(id))){
      alert("project deleted", id)
      getprojects()
    }else{
      alert("failed to delete project", id)
    }
  }
  

  // Handel update click
  const handleUpdateClick = (e, project) => {
    setUpdateActive(project.id)
    setActiveProjectData(project)
  } 
 


  return (
    <>

    {/* Refresh Btn */}
    <button className="bg-gray-700 py-2 px-4 rounded-md" onClick={getprojects}>Refresh projects</button>

    <div className="overflow-x-scroll min-w-[360px] my-8">
    {/* Tavle */}
    <table className="text-base" >
        {/* Table Headings */}
        <thead>
        <TableHeadingText />
        </thead>


        {/* Showing all Project in table */}
        <tbody>
        {projectData.map((project) => (
          (project.id != UpdateActive)?
            (<tr className="border-b-[1px] border-b-gray-200" key={project.id}>

                {/* ID */}
                <td className="border-r-[1px] border-r-gray-200 pl-4" >{project.id}</td>

                {/* Titles */}
                <td className="border-r-[1px] border-r-gray-200 pl-4" >{project.title}</td>

                {/* description */}
                <td className="border-r-[1px] border-r-gray-200 pl-4" >{project.description?project.description:<span className="italic opacity-50">none</span>}</td>

                {/* status */}
                <td className="border-r-[1px] border-r-gray-200 pl-4" >
                  {
                    project.status?
                    (<span className="mr-1 my-1 text-sm  px-2 rounded-sm" key={project.status.id}>{project.status.name}</span>)
                    :
                    <span className="italic opacity-50">none</span>
                  }
                </td>
                {/* tags */}
                <td className="border-r-[1px] border-r-gray-200 pl-4 max-w-52 ">
                  <div className="w-full h-full flex flex-wrap">
                    {/* tag map  */}
                    { 
                        project.tags.length?
                      project.tags.map((tag) => (
                          <span className="mr-1 my-1 text-sm bg-slate-700 px-2 rounded-sm" key={`tags#${tag.id}`}>{tag.name}</span>
                        ))
                        : <span className="italic opacity-50">none</span>
                      }
                  </div>
                </td>

                {/* categories */}
                <td className="border-r-[1px] border-r-gray-200 pl-4 max-w-52">
                  <div className="w-full h-full flex flex-wrap">

                    {
                    project.categories.length?
                    project.categories.map((category) => (
                        <span className="mr-1 my-1 text-sm bg-slate-700 px-2 rounded-sm" key={`categories#${category.id}`}>{category.name}</span>
                    ))
                    : <span className="italic opacity-50">none</span>
                  }

                  </div>
                </td>

                {/* delete */}
                <td>
                  <button onClick={(e)=>deleteProject(e,project.id )}>Delete</button>
                </td>

                {/* Update */}
                <td>
                  <button onClick={(e)=>handleUpdateClick(e, project)}>Update</button>
                </td>
                
            </tr>)
            : (<tr className="border-b-[1px] border-b-gray-200" key={ActiveProjectData.id}>

              {/* Update ID */}
              <td className="border-r-[1px] border-r-gray-200 pl-4" >{ActiveProjectData.id}</td>

              {/* Update Titles */}
              <td className="border-r-[1px] border-r-gray-200 pl-4" >
                <input className="bg-gray-600 text-gray-200 px-2 w-full" value={ActiveProjectData.title} id={`${ActiveProjectData.id}#title`} name="title" onChange={(e)=>setActiveProjectData((prev)=>({...prev, title:e.target.value}))} required/>
              </td>

              {/* Update description */}
              <td className="border-r-[1px] border-r-gray-200 pl-4" >
              <input className="bg-gray-600 text-gray-200 px-2 w-full" value={ActiveProjectData.description} id={`${ActiveProjectData.id}#description`} name="description" onChange={(e)=>setActiveProjectData((prev)=>({...prev, description:e.target.value}))} />
              </td>

              {/* Update status */}
              <td className="border-r-[1px] border-r-gray-200 pl-4" >
                {
                  project.status?
                  (<span className="mr-1 my-1 text-sm  px-2 rounded-sm" key={project.status.id}>{project.status.name}</span>)
                  :
                  <span className="italic opacity-50">none</span>
                }
              </td>
              {/* Update tags */}
              <td className="border-r-[1px] border-r-gray-200 pl-4 max-w-52 ">
                <div className="w-full h-full flex flex-wrap">
                  {/* tag map  */}
                  { 
                      project.tags.length?
                    project.tags.map((tag) => (
                        <span className="mr-1 my-1 text-sm bg-slate-700 px-2 rounded-sm" key={`tags#${tag.id}`}>{tag.name}</span>
                      ))
                      : <span className="italic opacity-50">none</span>
                    }
                </div>
              </td>

              {/* Update categories */}
              <td className="border-r-[1px] border-r-gray-200 pl-4 max-w-52">
                <div className="w-full h-full flex flex-wrap">

                  {
                  project.categories.length?
                  project.categories.map((category) => (
                      <span className="mr-1 my-1 text-sm bg-slate-700 px-2 rounded-sm" key={`categories#${category.id}`}>{category.name}</span>
                  ))
                  : <span className="italic opacity-50">none</span>
                }

                </div>
              </td>

              {/* Update delete */}
              <td>
                <button onClick={(e)=>deleteProject(e,project.id )}>Delete</button>
              </td>

              {/* Update Update */}
              <td>
                <button onClick={(e)=>alert("updated")}>Save</button>
              </td>
              
          </tr>)
          ))}
        </tbody>
      </table>

    </div>
    </>
  );
}
