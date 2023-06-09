import { combineReducers } from "redux";
import { mySkillReducer } from "./skills/reducer";

export default combineReducers({
    skillState: mySkillReducer,
    // projectState: projectReducer
})
