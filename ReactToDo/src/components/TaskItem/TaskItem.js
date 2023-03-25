import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const TaskItem = (item, tags, icons, deleteTask, handleOpen, setModalContent) => {    

    function createSecondaryText() {
        const tagData = tags.find(tag => tag.id === item.tagId)
        
        return (
            <>
                <span
                    style={{display: 'inline-block', color: tagData.color, marginRight: '10px', width: '115px'}}
                >
                    {tagData.name}
                </span>
                <span>
                    {item.description}
                </span>
            </>
        )
    }

    function setAvatar() {
        const icon = icons.find(icon => icon.id === item.IconId)

        return (
            <img 
                style={{width: '22px', height: '22px'}}
                src={icon.icon}
                alt='icon'
            />
        )
    }

    function deleteElem(e, id) {
        e.preventDefault();

        deleteTask(id)
    }

    return (
    <ListItem
        key={item.id}
        sx={{backgroundColor: '#e3f2fd' , border: '1px solid #747D91', height: 60, marginBottom: '10px', borderRadius: '25px'}}
        secondaryAction={
        <>
        <IconButton
            edge="end" 
            aria-label="delete" 
            onClick={() => {
                handleOpen() 
                setModalContent({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    completed: item.completed,
                    data: item.data,
                    IconId: item.IconId,
                    tagId: item.tagId
                })
                }}>
            <Edit />
        </IconButton>
        <IconButton
            edge="end" 
            aria-label="delete" 
            onClick={e => deleteElem(e, item.id)}>
            <Delete />
        </IconButton>
        </>
        }
        >
        <ListItemAvatar>
        <Avatar>
            {setAvatar()}
        </Avatar>
        </ListItemAvatar>
        <ListItemText
        primary={item.name}
        secondary={createSecondaryText()}
        />
    </ListItem>
    )
}

export default TaskItem;

