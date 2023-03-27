import { useCallback, useEffect, useState } from 'react';

import { Modal, Box, Button, Stack, TextField, IconButton, MenuItem } from '@mui/material'
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
}

function ItemModal({tags, icons, open, handleClose, modalContent, changeTask}) {

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [completed, setCompleted] = useState();
    const [date, setDate] = useState();

    const [curIcon, setCurIcon] = useState();
    const [curIconId, setCurIconId] = useState();

    const [curTag, setCurTag] = useState();
    const [curTagId, setCurTagId] = useState();
    
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        setId(modalContent.id)
        setName(modalContent.name)
        setDescription(modalContent.description)
        setCompleted(modalContent.completed)
        setDate(modalContent.date)

        setCurIcon(handleIconById(modalContent.IconId))
        setCurIconId(modalContent.IconId)
        
        setCurTag(handleTagById(modalContent.tagId))
        setCurTagId(modalContent.tagId)

    }, [modalContent])

    function handleVisibility(e) {
        e.preventDefault();
        setVisibility(visibility => !visibility);
    }



    function handleIconByLink(link) {
        setCurIcon(link)  
    }

    function handleIconById(id) {
        if (id === undefined) return
        const iconLink = icons.find(item => item.id === id).icon
        return iconLink
    }

    function handleCurIconId(id) {
        setCurIconId(id)
        console.log(curIconId)
    }

    function handleTagById(id) {
        if (id === undefined) return
        const tag = tags.find(item => item.id === id).name
        return tag
    }

    function handleCurTagId(id) {
        setCurTagId(id)
        console.log(curTagId)
    }



    function changeInfo() {

        let newTask ={
            id,
            name,
            description,
            completed,
            date,
            IconId: curIconId,
            tagId: curTagId
        }

        changeTask(newTask)
    }

    const clearModal = () => {
        setId('')
        setName('')
        setDescription('')
        setCompleted('')
        setDate('')
        setCurIcon('')
        setCurTag('')

    }

  return (      
    <Modal
        open={open}
        onClose={() => handleClose(clearModal)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Box 
                className="upper"
                sx={{ display: 'flex', alignItems: 'flex-end' }}
            >
                <IconButton
                    onClick={e => handleVisibility(e)}
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
            </Box>

            <Box 
                sx={{position: 'relative'}}
            >
                <Box
                className="icons-popup"
                style={{visibility: `${(visibility) ? 'visible' : 'hidden'}`, display: 'flex', width: '125px', padding: '5px 10px', justifyContent: 'space-between',flexWrap: 'wrap', position: 'absolute', top: '-65px', left: '-190px', backgroundColor: 'white', border: '2px solid #000', boxShadow: 24, opacity: `${visibility ? 1 : 0}`, transition: 'all 0.15s'}}
                >
                    {icons.map(item => {
                        return (
                            <button
                                className='hover-pointer'                          
                                style={{border: 'none', background: 'none'}}
                                onClick={
                                    e => {
                                        handleIconByLink(item.icon, item.id)
                                        handleCurIconId(item.id)
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
                </Box>  
            </Box>

            <TextField    
                multiline
                maxRows={4}
                sx={{width: '100%', mt: '20px'}}
                id="name"
                name="name" 
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                label="Enter Description" 
                variant="standard"
            />

            <TextField
                    onChange={(e) => {setCurTag(e.target.value)}}
                    value={curTag}
                    size="small"
                    sx={{width: '150px', mt: '25px'}}
                    id="tag"
                    name="tag"
                    select
                    label="Tag"
                    >
                    {tags.map((item) => (
                        <MenuItem
                        onClick={(e) => 
                            handleCurTagId(item.id)}
                        key={item.id}
                        value={item.name}
                        >
                        {item.name}
                        </MenuItem>
                    ))}
            </TextField>

            <Stack
                sx={{mt: 'auto'} }
                spacing={2} 
                direction="row-reverse"
            >
                <Button 
                    onClick={() => {
                        handleClose(clearModal);
                    }}
                    color="error" 
                    variant="contained"
                >
                    Cancel
                </Button>
                <Button 
                    onClick={() => {
                        changeInfo();
                        handleClose(clearModal);
                    }}
                    color="success" 
                    variant="contained"
                >
                    Edit
                </Button>
            </Stack>
            
        </Box>
    </Modal>
  )
}

export default ItemModal