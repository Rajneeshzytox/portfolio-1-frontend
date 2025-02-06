import { NavLink } from "react-router-dom";

import TotalCard from "./TotalCard";

import {useSelector} from "react-redux"

import { useState } from "react";

import {serverURL} from "../Data/api"

const Admin = () => {

    // DO NOT TRY AT HOME
    const projects = useSelector(s=>s.projects.data)
    const tags = useSelector(s=>s.tags.data)
    const categories = useSelector(s=>s.categories.data)
    const status = useSelector(s=>s.status.data)
    const frontendData = useSelector(s=>s.frontendData.data)

    

    const [totalData, setTotalData] = useState([
        {title: "projects", url: "/admin/projects", total: projects.length, isFormAvailable: true},
        {title: "tags", url: "/admin/options/tags", total: tags.length, isFormAvailable: true},
        {title: "categories", url: "/admin/options/categories", total: categories.length, isFormAvailable: true},
        {title: "status", url: "/admin/options/status", total: status.length, isFormAvailable: true},

        {title: "education", url: `${serverURL}/admin/API/education/`, total: frontendData[0].education.length},
        
    ])

    return (
        <>
        <main className="h-full max-w-[1024px] mx-auto">
            <section>
                {/* Admin Heading */}
                <h1 className="main-title">ADMIN</h1>

                {/* go back */}
                <NavLink to="/" className="px-2 py-1 inline-block my-3 hover:underline cursor-pointer ">visit site</NavLink>

                {/* admin img */}
                <div className="w-full max-h-[350px] h-1/2 bg-[#e1e1e1] overflow-hidden grid place-content-center relative">
                    <img className="min-h-full mx-auto object-cover object-center" src="/img/admin.png" />
                    <span className="aspect-square max-w-52 w-[20%] rotate-45 block absolute bottom-0 translate-y-1/2 bg-gray-950"></span>
                    <span className="aspect-video max-w-36 w-1/4 bottom-0 right-0 block absolute rotate-[120deg] translate-x-1/2 translate-y-1/2 bg-gray-950"></span>
                    <span className="aspect-square max-w-52 w-[20%] rotate-45 block absolute bottom-0 right-0 -translate-x-full translate-y-2/3 bg-gray-950"></span>
                </div>
            </section>
            

            {/* Grid Card  section */}
            <section className="flex flex-wrap gap-10 w-max max-w-full min-w-[200px] mx-auto">
                {
                    totalData.map((data, index) => (
                        data.isFormAvailable? (
                            <NavLink to={data.url} key={index}>
                                <TotalCard 
                                    title={data.title}
                                    url={data.url}
                                    total={data.total}
                                />
                            </NavLink>
                        ):(
                            <a href={data.url} target="_blank" key={index}>
                                <TotalCard 
                                    title={data.title}
                                    url={data.url}
                                    total={data.total}
                                />
                            </a>
                        )

                        
                    ))
                }
            </section>
        </main>
        </>
    )

}

export default Admin;