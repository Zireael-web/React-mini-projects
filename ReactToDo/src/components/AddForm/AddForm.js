import { useState } from "react";

import { TextField, Button, Divider, MenuItem, IconButton, Box} from "@mui/material";

import { Check } from "@mui/icons-material";

function AddForm({tags, icons}) {
    console.log('render')
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [curIcon, setСurIcon] = useState(findIconById);
    const [visibility, setVisibility] = useState(false);

    function handleVisibility(e, visibility) {
        e.preventDefault();
        setVisibility(visibility => !visibility);
    }

    function handleCurIcon(e, item) {
        e.preventDefault();
        setСurIcon(findIconById(item.id))
    }

    function findIconById(id = 0) {
        
        const item = icons.find(item => item.id === id).icon;
        return item;
    }

    
    return (    
        <form 
        style={{padding: '10px', border: '1px solid #747D91', borderRadius: '10px', position: 'relative'}}>
            <div 
            class="upper"
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
            class="icons-popup"
            style={{visibility: `${(visibility) ? 'visible' : 'hidden'}`, width: '100px', height: '100px', display: 'flex', flexWrap: 'wrap', position: 'absolute', top: '-100px', left: '-100px'}}
            >
                {icons.map(item => {
                    return (
                        <button
                        style={{border: 'none', background: 'none'}}
                        onClick={
                            e => {
                                handleCurIcon(e, item)
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
            class="bottom"
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
                        <MenuItem key={item.id} value={item.name}>
                        {item.name}
                        </MenuItem>
                    ))}
                </TextField>
                <Button
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