import { Modal, Box, Button, Stack, TextField, IconButton, MenuItem } from '@mui/material'
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

function ItemModal({tags, icons, open, handleClose, modalContent}) {

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <div 
                className="upper"
                style={{ display: 'flex', alignItems: 'flex-end' }}
            >
                <IconButton
                    size="small"
                    sx={{mr: '5px'}}
                >
                    <img
                        style={{width: '20px', height: '20px'}}
                        alt='choose task icon'>
                    </img>
                </IconButton>
                <TextField
                    sx={{width: '100%'}}
                    id="name"
                    name="name" 
                    label="Enter Task Name" 
                    variant="standard"
                />
            </div>
            <TextField
                    size="small"
                    sx={{width: '150px', mt: '25px'}}
                    id="tag"
                    name="tag"
                    select
                    label="Tag"
                    >
                {tags.map((item) => (
                        <MenuItem
                        key={item.id}
                        value={item.name}>
                        {item.name}
                        </MenuItem>
                    ))}
            </TextField>
            <Stack
                sx={{mt: '170px'} }
                spacing={2} 
                direction="row-reverse"
            >
                <Button 
                    onClick={handleClose}
                    color="error" 
                    variant="contained"
                >
                    Cancel
                </Button>
                <Button 
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