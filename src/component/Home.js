import React from 'react'


const Home = ({data,onDelete})=>{
    return(
        <div class="columns is-mobile is-centered mt-4">
        <div class="column is-half">

        {data.map(e=>{
            return(
                <div class="notification has-text-centered box">
                <button className="delete" onClick={()=>{onDelete(e.id)}}></button>
                <p className="title is-5">{e.title}</p>
            </div>
            )
        })}
           
        </div>
    </div>
    )
}

export default Home;