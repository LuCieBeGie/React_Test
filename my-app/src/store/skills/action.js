import { GET_MY_SKILLS } from "./type";

export function setMySkill(data) {
    return {
        type: GET_MY_SKILLS,
        payload: data
    }
}