import { useState } from "react";

import { TextField, Button, MenuItem, IconButton} from "@mui/material";

import { Check } from "@mui/icons-material";

function AddForm({tags, icons, addTask}) {
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');

    const [curTagId, setCurTagId] = useState();
    const [curIcon, setСurIcon] = useState(findIconById);
    const [curIconId, setCurIconId] = useState(0)

    const [visibility, setVisibility] = useState(false);
    
    const [dateI, setDateI] = useState(0);

    function handleVisibility(e) {
        e.preventDefault();
        setVisibility(visibility => !visibility);
    }

    function handleCurData(e, item) {
        e.preventDefault();
        setСurIcon(findIconById(item.id))
        setCurIconId(item.id)
    }

    function handleCurTagId(e, id) {
        e.preventDefault();
        setCurTagId(id);
    }

    function findIconById(id = 0) {
        
        const item = icons.find(item => item.id === id).icon;
        return item;
    }

    function gatherInfo(e) {
        e.preventDefault();

        setDateI(dateI => dateI + 1)

        let newTask ={
            id: Date.parse(new Date()) + dateI,
            name,
            description: '',
            completed: false,
            date: null,
            IconId: curIconId,
            tagId: curTagId
        }

        setName('')
        setTag()
        setCurTagId()
        

        addTask(newTask)
    }

    return (    
        <form 
        style={{padding: '10px', border: '1px solid #747D91', borderRadius: '10px', position: 'relative'}}>
            <div 
            className="upper"
            style={{ display: 'flex', alignItems: 'flex-end' }}>
                <IconButton
                    onClick={handleVisibility}
                    size="small"
                    sx={{mr: '5px'}}
                >
                    <img
                        src={curIcon}
                        style={{width: '20px', height: '20px'}}
                        alt='choose task icon'>
                    </img>
                </IconButton>
                <TextField
                    onChange={(e) => {setName(e.target.value)}}
                    value={name}
                    sx={{width: '100%'}}
                    id="name"
                    name="name" 
                    label="Enter Task Name" 
                    variant="standard"
                />
            </div>
            <div 
            className="icons-popup"
            style={{visibility: `${(visibility) ? 'visible' : 'hidden'}`, justifyContent: 'space-between', flexWrap: 'wrap', padding: '5px 10px', width: '125px', display: 'flex', position: 'absolute', top: '0px', left: '-145px', border: '2px solid #000', boxShadow: 24, opacity: `${visibility ? 1 : 0}`, transition: 'all 0.15s'}}
            >
                {icons.map(item => {
                    return (
                        <button
                        className="hover-pointer"
                        style={{border: 'none', background: 'none'}}
                        onClick={
                            e => {
                                handleCurData(e, item)

                                handleVisibility(e);
                        }}
                        >
                            <img
                                src={item.icon}
                                style={{width: '30px', height: '30px'}}
                                alt='choose task icon'>
                            </img>
                        </button>
                    )
                })}
            </div>  
            <div 
            className="bottom"
            style={{display: 'flex', marginTop: '30px', alignItems: 'flex-end'}}
            >
                <TextField
                    onChange={(e) => {setTag(e.target.value)}}
                    value={tag}
                    size="small"
                    sx={{width: '150px'}}
                    id="tag"
                    name="tag"
                    select
                    label="Tag"
                    >
                    {tags.map((item) => (
                        <MenuItem
                        key={item.id}
                        onClick={e => handleCurTagId(e, item.id)}
                        value={item.name}>
                        {item.name}
                        </MenuItem>
                    ))}
                </TextField>
                <Button
                    onClick={e => gatherInfo(e)}
                    type="submit"
                    sx={{ml: '10px'}} 
                    variant="contained"
                    endIcon={<Check/>}
                    >Add task
                </Button>
            </div>
        </form>
  ) 
}

export default AddForm