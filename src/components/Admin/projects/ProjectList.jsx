import { delProject, loadProjects } from "../Data/api";





// Table Headings
function TableHeadingText() {
  const table_heading_data = [
    { icon: "#", text: "S.no" },
    { icon: "N", text: "Name" },
    { icon: "D", text: "Discription" },
    { icon: "S", text: "Status" },
    { icon: "#", text: "Tag" },
    { icon: "C", text: "Categories" },
    { icon: "❌", text: "Delete" },
    { icon: "U", text: "Update" },
  ];
  return (
    <>
      <tr className="border-b-[1px] border-b-gray-200">
        {table_heading_data.map((table_heading) => (
          <th
            className="text-sm text-gray-400 font-normal min-w-52 text-left pl-4"
            key={table_heading.text}
          >
            <span className="Table-Heading-icon">{table_heading.icon}</span>
            <span>{table_heading.text}</span>
          </th>
        ))}
      </tr>
    </>
  );
}

const TableRow = ({ project, handleUpdateClick, deleteProject }) => {
  return (
    <>
      <tr className="border-b-[1px] border-b-gray-200" key={project.id}>
        {/* ID */}
        <td className="border-r-[1px] border-r-gray-200 pl-4">{project.id}</td>

        {/* Titles */}
        <td className="border-r-[1px] border-r-gray-200 pl-4">
          {project.title}
        </td>

        {/* description */}
        <td className="border-r-[1px] border-r-gray-200 pl-4">
          {project.description ? (
            project.description
          ) : (
            <span className="italic opacity-50">none</span>
          )}
        </td>

        {/* status */}
        <td className="border-r-[1px] border-r-gray-200 pl-4">
          {project.status ? (
            <span
              className="mr-1 my-1 text-sm  px-2 rounded-sm"
              key={project.status.id}
            >
              {project.status.name}
            </span>
          ) : (
            <span className="italic opacity-50">none</span>
          )}
        </td>

        {/* tags */}
        <td className="border-r-[1px] border-r-gray-200 pl-4 max-w-52 ">
          <div className="w-full h-full flex flex-wrap">
            {/* tag map  */}
            {project.tags.length ? (
              project.tags.map((tag) => (
                <span
                  className="mr-1 my-1 text-sm bg-slate-700 px-2 rounded-sm"
                  key={`tags#${tag.id}`}
                >
                  {tag.name}
                </span>
              ))
            ) : (
              <span className="italic opacity-50">none</span>
            )}
          </div>
        </td>

        {/* categories */}
        <td className="border-r-[1px] border-r-gray-200 pl-4 max-w-52">
          <div className="w-full h-full flex flex-wrap">
            {
                project.categories.length ? (
                project.categories.map((category) => (
                    <span
                    className="mr-1 my-1 text-sm bg-slate-700 px-2 rounded-sm"
                    key={`categories#${category.id}`}
                    >
                    {category.name}
                    </span>
                ))
                ) : (
                <span className="italic opacity-50">none</span>
                )
            }
          </div>
        </td>

        {/* delete */}
        <td>
          <button onClick={() => deleteProject( project.id)}>Delete</button>
        </td>

        {/* Update */}
        <td>
          <button onClick={() => handleUpdateClick(project)}>Update</button>
        </td>
      </tr>
    </>
  );
};

const ProjectList = ({ 
        projects,
        setUpdate,
        loadAllProjects,

    }) => {

    // Handel Update Click 
    const handleUpdateClick = (projectData) =>{
        // remove any saved data previous 
        const reset = () =>{
            setUpdate({
                active:false,
                projectUpdateID: NaN,
                projectUpdateData: {},
            })
        }

        reset();
        setUpdate(() => ({
            active:true,
            projectUpdateID: projectData.id,
            projectUpdateData: projectData,
        }))
    }


    // Handel Delete Click
    const deleteProject = async (id) =>{
       await delProject(id); 
       loadAllProjects()
    }

  return (
    <div className="overflow-x-scroll min-w-[360px] my-8">
      
      <table>
        <thead>
          <TableHeadingText />
        </thead>

        {/* table body */}
        <tbody>
          {projects.map((project) => (
            <TableRow
                key={project.id}
                project={project}
                handleUpdateClick={handleUpdateClick}
                deleteProject={deleteProject}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
