import React, {useState} from 'react'

export default function ShareIdea() {
    const [techS, setTechS] = useState('')
    const [externalL, setExternalL] = useState('')
    const [inputData, setInputData] = useState({
        idea_title: "aloo",
        short_desc: "",
        long_desc: "",
        tech_stack: [],
        external_links: []
    })

    const handleValue = e =>{
        e.preventDefault()
        const {name, value} = e.target;
        if(name === "tech_stack"){
            setTechS(value)
        }else if(name === "external_links"){
            setExternalL(value)
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        if(name === "tech_stack" || name==="external_links"){
            setInputData(state => ({
                ...state,
                [name] : [...state[name],name === "tech_stack" ? techS : externalL]
            }))
            setExternalL('')
            setTechS('')
        }else{
            setInputData(state => ({
                ...state,
                [name] : value
            }))
        }
    }
  return (
    <div>
        <h1>Share an Idea</h1>
        <div>
            <label>Idea title</label>
            <input type="text" name="idea_title" placeholder='Idea 1' onChange={handleChange} value={inputData.idea_title} />
        </div>
        <div>
            <label>Short description</label>
            <input type="text" name="short_desc" placeholder='Idea 1' onChange={handleChange} value={inputData.short_desc}/>
        </div>
        <div>
            <label>Long description</label>
            <input type="text" name="long_desc" placeholder='Idea 1' onChange={handleChange} value={inputData.long_desc}/>
        </div>
        <div>
            <label>Technology used</label>
            <input type="text" name="tech_stack" placeholder='Idea 1' onChange={handleValue} value={techS} />
            <button name="tech_stack" onClick={handleChange}>add</button>
        </div>
        <div>
            <label>External links</label>
            <input type="text" name="external_links" placeholder='Idea 1' onChange={handleValue} value={externalL}/>
            <button name="external_links" onClick={handleChange}>add</button>
        </div>
        <div>
            <button>Share with the world</button>
        </div>
    </div>
  )
}
