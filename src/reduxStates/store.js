import {configureStore} from "@reduxjs/toolkit";

// slices
import ProjectSlice from "./slices/projectsSlice.js";
import TagsSlice from "./slices/tagsSlice.js";
import CategoriesSLice from "./slices/categoriesSlice.js";
import StatusSlice from "./slices/statusSlice.js";
import FrontendSlice from "./slices/frontendData.js"


const store = configureStore({
    reducer: {
        projects: ProjectSlice,
        tags: TagsSlice,
        categories: CategoriesSLice,
        status: StatusSlice,
        frontendData: FrontendSlice,
    }
});


export default store;