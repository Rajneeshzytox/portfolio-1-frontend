import {createSlice} from "@reduxjs/toolkit"

const FrontendData = {
    img: "/img/pic_raj.jpg",
    fname: "Rajneesh",
    lname: "Kumar",
    dob: "4/03/2005",
    email: "rajneesh@zytox.com",
    about: "shaping tomorrow with every line of code today",
    social: [
        {id:1, text:"instagram", icon:"instagram.png", url: "https://instagram.com/rajneeshzytox"},
        {id:2, text:"github", icon:"github.png", url: "https://github.com/rajneeshzytox"},
        {id:3, text:"linkedin", icon:"linkedin.png", url: "https://linkedin.com/in/rajneeshzytox"},
        {id:4, text:"twitterX", icon:"twitter.png", url: "https://x.com/rajneeshzytox"},
        {id:5, text:"whatsApp", icon:"whatsapp.png", url: "https://wa.me/+918178545282"},
        {id:6, text:"facebook", icon:"facebook.png", url: "#"},
    ],
    journey: [
        {id:2, title: "event 2", description: "abc", startDate:"2003", endDate:"2024", icon:"startJourney.svg"},
        {id:1, title: "event 1", description: "abc", startDate:"2003", endDate:"2024", icon:"education.svg"},
        {id:3, title: "event 3", description: "description c ", startDate:"2003", endDate:"2024", icon:"education.svg"},
    ],
    skills: [
        {id:1, text:"html", icon:"html.svg"},
        {id:2, text:"css", icon:"css.svg"},
        {id:3, text:"js", icon:"javascript.svg"},
        {id:4, text:"react", icon:"react.svg"},
        {id:5, text:"python", icon:"python.svg"},
        {id:6, text:"django", icon:"django.svg"},
       
    ],
    summary: "description",




}

const FrontendSlice = createSlice({
    name: "Frontend",
    initialState: FrontendData,

});


export default FrontendSlice.reducer;