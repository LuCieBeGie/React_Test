import { skillState } from "./state";
import { GET_MY_SKILLS } from "./type";

export const mySkillReducer = (state = skillState, option) => {
    switch (option.type) {
        case GET_MY_SKILLS:
            state.mySkills = option.payload;
            break;
        default:
            break;
    }
    return { ...state }
}