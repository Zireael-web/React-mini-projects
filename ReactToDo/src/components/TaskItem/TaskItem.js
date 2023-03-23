import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText  } from '@mui/material';
import { Folder, Delete } from '@mui/icons-material';

const TaskItem = (item) => {    

    return (
    <ListItem
        key={item.id}
        sx={{backgroundColor: '#e3f2fd' , border: '1px solid #747D91', height: 60, marginBottom: '10px', borderRadius: '25px'}}
        secondaryAction={
        <IconButton edge="end" aria-label="delete">
            <Delete 
            />
        </IconButton>
        }
        >
        <ListItemAvatar>
        <Avatar>
            <Folder
             />
        </Avatar>
        </ListItemAvatar>
        <ListItemText
        primary={item.name}
        secondary={(item.description) ? 'Task with description' : null}
        />
    </ListItem>
    )
}

export default TaskItem;

