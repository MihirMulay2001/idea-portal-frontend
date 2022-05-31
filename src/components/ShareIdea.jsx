import React, {useState} from 'react'
import styles from '../styles/shareideacomponent.module.css'
import Tag from './Tag'

export default function ShareIdea({onClick, contract}) {
    const [techS, setTechS] = useState('')
    const [externalL, setExternalL] = useState('')
    const [btnCont, setBtnCont] = useState('Share with the world')
    const [inputData, setInputData] = useState({
        idea_title: "",
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

    const onClose = async (e) => {
        e.preventDefault()
        onClick();
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

    const onSubmit = async (e) =>  {
        e.preventDefault()
        try{
            const ts = inputData.tech_stack.join(',')
            const el=  inputData.external_links.join(',')
            const arr = [inputData.idea_title, inputData.short_desc, inputData.long_desc,ts,el]
            const aww = arr.join("$%")
            const w = await contract.setIdea(aww)
            setBtnCont("Sharing idea...")
            await w.wait();
            console.log("success");
            onClick()
        }catch(e){
            console.log(e);
        }
    }

  return (
    <div className={styles.container}>
        <div>
            <button className={styles.closebtn} onClick={onClose}>X</button>
            <h1>Share an Idea</h1>
            <div>
                <label>Idea title</label>
                <input type="text" name="idea_title" placeholder='Idea 1' onChange={handleChange} value={inputData.idea_title} />
            </div>
            <div>
                <label>Short description</label>
                <input type="text" name="short_desc" placeholder='This is an idea about cute ducks' onChange={handleChange} value={inputData.short_desc}/>
            </div>
            <div>
                <label>Long description</label>
                <textarea type="text" name="long_desc" placeholder='This is a lenghty description' onChange={handleChange} value={inputData.long_desc}/>
            </div>
            <div>
                <label>Technology used</label>
                <input type="text" name="tech_stack" placeholder='Solidity' onChange={handleValue} value={techS} />
                <button name="tech_stack" onClick={handleChange}>Add</button>
                <div >
                {
                    inputData.tech_stack.map((item,key) => <Tag value={item} key={key}/>)
                }
                </div>
            </div>
            <div>
                <label>External links</label>
                <input type="text" name="external_links" placeholder='www.wikipedia.com' onChange={handleValue} value={externalL}/>
                <button name="external_links" onClick={handleChange}>Add</button>
                {
                    inputData.external_links.map((item,key) => <Tag value={item} key={key}/>)
                }
            </div>
            <div className={styles.submitbtndiv}>
                <button onClick={onSubmit} 
                className={styles.submitbtn}>{btnCont}</button>
            </div>
        </div>
    </div>
  )
}
