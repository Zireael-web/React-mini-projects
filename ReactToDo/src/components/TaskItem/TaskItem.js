import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const TaskItem = (item, tags, icons, deleteTask, handleOpen, setModalContent) => {      

    /* const newName = (item.name && item.name.length > 70) ? item.name = item.name.slice(0, 70) + '...' : null; */

    function createSecondaryText() {
        const newDescription = (item.description && item.description.length > 90) ? item.description.slice(0, 90) + '...' : item.description;
        
        
        const tagData = tags.find(tag => tag.id === item.tagId)
        
        return (
            <>  
                <span
                    style={{display: 'block'}}
                >
                    {item.description ? newDescription : <div style={{marginTop: '20px'}}></div>}
                </span>
                <span
                    style={{textAlign: 'center', color: 'white', backgroundColor: '#1976d2', borderRadius: '20px', padding: '2px 6px'}}
                >
                    {tagData.name}
                </span>
            </>
        )
    }

    function createMainText() {
        const newName = (item.name && item.name.length > 70) ? item.name.slice(0, 70) + '...' : item.name;

        return (
            <span>{newName}</span>
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
        sx={{border: '1px solid #747D91', height: 75, marginBottom: '10px', borderRadius: '20px', paddingTop: 0, paddingBottom: 0}}
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
            }}
        >
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
            sx={{display: 'flex', flexDirection: 'column', justifyContent: 'start', m: 0, height: '90%'}}
            primary={createMainText()}
            secondary={createSecondaryText()}
        />
    </ListItem>
    )
}

export default TaskItem;

