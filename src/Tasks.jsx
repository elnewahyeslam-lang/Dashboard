import { useState } from "react"

function Tasks( {tasks,setasks}){
    const[input,setinput]=useState("")
    function addTask(){
        if(input===""){
            return;
       
        }else{
            const objectTasks={
                text:input,
                completed:false
            }
        setasks([...tasks,objectTasks])
        setinput("")
        }
    }
    function deleteTask(indexTasks){
        const newTask=tasks.filter((_,index)=>index!==indexTasks)
        setasks(newTask)
    }
    function toggle(indexTasks){
        const taskComplete=tasks.map((t,index)=>{
            if(index===indexTasks){
                return{...t,completed: !t.completed}
            }
            return t
        })
        setasks(taskComplete)
    }
    return(
        <div className="recent-tasks">
        <h1>Recent Taska</h1>
        <div className="add-task">
            <input type="text"  placeholder="Write The Task " value={input} onChange={(e)=>setinput(e.target.value)}
            
            />
            <button onClick={addTask}>+Add Task</button>
        </div>
        <div className="tasks-list">
            <ul>
                {tasks.map((task,index)=>(<li key={index}> <input type="checkbox" checked={task.completed} onChange={()=>toggle(index)}/>
                {task.text} <button onClick={()=>deleteTask(index)}>Delete</button> </li>))}
            </ul>
        </div>
        </div>

    )
}
export default Tasks