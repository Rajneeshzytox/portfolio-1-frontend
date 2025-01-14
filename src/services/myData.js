import { fetchProjects } from "./api.js";


export function PersonalInfo() {
  return {
    img: "./img/pic_raj.jpg",
    fname: "Rajneesh",
    lname: "Kumar",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    summary:
      "Passionate web developer with experience in front-end development using HTML, CSS, and JavaScript. Skilled in converting image designs to webpage and creating easy to use websites. Good at solving problems and always eager to learn more. Currently studying for a Bachelor of Computer Applications and working on an interactive personal portfolio.",
    skills: ["1", "2", "3", "4", "5", "6", "7"],
  };
}

export function ProjectData() {
  
  return [
   
  ];
}

export function FormLabelData(tags, categories, status) {
  


  // const tags = [{id:1, name:'html'}]
  // const categories = [{
  //   id: 1,
  //   name: "Frontend",
  // },
  // {
  //   id: 2,
  //   name: "backend",
  // },]
  // const status = [{id: 1,
  //   name: "pending",},]

  

  return {
    inputLabels: [
      { type: "text", text: "title", req: true },
      { type: "text", text: "description", req: false, },
      { type: "url", text: "source", req: false },
      { type: "url", text: "demo", req: false},
      { type: "url", text: "site", req: false },
    ],

    selectLabels: [
      { text: "tags", type: "checkbox", options: tags },
      { text: "categories", type: "checkbox", options: categories },
      { text: "status", type: "radio", options: status },
    ],
  };
}


