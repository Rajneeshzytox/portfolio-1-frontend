// Project Create Form Data
export const projectsCreateFormData = (tagsData, categoriesData, statusData) =>{
    return {
            inputLabels: [
              { type: "text", text: "title", req: true },
              { type: "text", text: "description", req: false, },
              { type: "url", text: "source", req: false },
              { type: "url", text: "demo", req: false},
              { type: "url", text: "site", req: false },
            ],
            selectLabels: { tags:tagsData, categories: categoriesData, status: statusData }
          }
}
// Project Update Form Data
export const projectUpdateFormData = (projectData, options) =>{
    return {
            inputLabels: [
              { type: "text", text: "title", req: true,  value: projectData.title},
              { type: "text", text: "description", req: false,  value: projectData.description},
              { type: "url", text: "source", req: false, value: projectData.source},
              { type: "url", text: "demo", req: false, value: projectData.demo},
              { type: "url", text: "site", req: false, value: projectData.site},
            ],
            selectLabels: { 
              tags:options.tags, categories: options.categories, status: options.status 
            }
          }
}


