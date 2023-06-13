import { useDispatch, useSelector } from "react-redux"

function Skills() {
    const dispatch = useDispatch()
    const mySkills = useSelector(state => state.skillState)
    console.log(mySkills);
    return (<>
    <div className="background">
        <button>Technical</button>
        <button>Personal</button>
    </div>
    </>)
}

export default Skills