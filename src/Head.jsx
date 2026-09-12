import {LuClipboardList,LuCircleCheck,LuClock, LuCalendar} from'react-icons/lu'
function Head({tasks}){
    const total= tasks.length
    const completed= tasks.filter(t=>t.completed).length
    const inProgress= total-completed
    return(
        <>
        <div className='big'>
        <div className='title'>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's What's happening today</p>
        </div>
        <section className='head'>
            <div className='table'>
                <LuClipboardList  className='cross  grown'/>
                <div className='info'>
                <p>Total Tasks</p>
                <h1> {total}</h1>
                </div>
            </div>
            <div className='table'>
                <LuCircleCheck className='cross green'/>
                <div className='info'>
                <p>Completed</p>
                <h1>{completed}</h1>
                </div>
            </div>
            <div className='table'>
                <LuClock className='cross yellow' />
                <div className='info'>
                <p> In Progress</p>
                <h1>{inProgress}</h1>
                </div>
            </div>
            <div className='table' >
                <LuCalendar className='cross  blue' />
                <div className='info'>
                <p> Due Today</p>
                <h1> 2</h1>
                </div>
            </div>
        </section>
        </div>
        </>

       
    )
}
export default Head