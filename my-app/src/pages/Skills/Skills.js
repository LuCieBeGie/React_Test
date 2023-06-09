import { useDispatch, useSelector } from "react-redux"

function Skills() {
    const dispatch = useDispatch()
    const mySkills = useSelector(state => state.skillState)
    console.log(mySkills);
    return (<>
        <h1>Skills</h1>
    </>)
}

export default Skills