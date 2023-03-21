import { Grid, List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText  } from '@mui/material';
import { Folder, Delete } from '@mui/icons-material';

const TaskList = ({data}) => {

    const itemsList = data.map(item => {
        return (
            <List>
                <ListItem
                    secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <Delete />
                    </IconButton>
                    }
                >
                    <ListItemAvatar>
                    <Avatar>
                        <Folder />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                    primary={item.name}
                    secondary={item.description}
                    />
                </ListItem>,
            </List>
    )})


    return (
        <Grid item xs={12}>
            {itemsList}
        </Grid>
    )
} 

export default TaskList;

{/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Tasks list
                </Typography> */}