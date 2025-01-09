import { fetchProjects } from "../../services/api";
import { useState, useEffect } from "react";

export default function TempList(){
    const [Projectjson, setProjectjson] = useState([]);

    useEffect(() => {
        const getProjects = async () =>{
            const ProjectData = await fetchProjects();
            setProjectjson(ProjectData);
        };
        getProjects()

    }, []);

    console.log(Projectjson)

    return(
        <>
        <h1 className="text-3xl">Project List</h1>
           {
            Projectjson.map((project) => (
                <li key={project.id}>

                    <p className="heading_temp">Title: {project.title}</p>
                    {project.description? <p className="heading_temp">Discription: {project.description}</p>:null}

                    {project.tags.length?
                        <p className="heading_temp">tags: {project.tags.map(tag=>(
                            <span key={tag.id} className="ml-2">{tag.name}</span>
                        ))}
                        </p>
                    :null}

                    {project.categories.length?
                        <p className="heading_temp">categories: {project.categories.map(category=>(
                            <span key={category.id} className="ml-2">{category.name}</span>
                        ))}
                        </p>
                    :null}

                    {project.status? <p className="heading_temp">status: {project.status.name}</p>:null}
                    
                </li>
            ))
           }
        </>
    );
}



