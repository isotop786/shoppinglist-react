import React,{useState,useEffect} from 'react';


const Add = ({addItem})=>{
    
    const [text,setText] = useState('')

    useEffect(()=>{
        // console.log('running')
        // console.log(item)
    },[])

    const submit = ()=>{
        console.log(text)
        addItem(text)
        setText('')
    }

    return(
        <div class="columns is-mobile is-centered mt-4">
            <div class="column is-half">
                <div className="field has-addons is-full">
                   <input type="text" className="input control" 
                   value={text}
                   onChange={(e)=>{setText(e.target.value)}}
                   placeholder="e.g Eggs "
                    
                   />
                   <button disabled={text == ''} onClick={submit} className="button is-info control">Add</button>
                </div>
            </div>
        </div>

    )
}


export default Add;