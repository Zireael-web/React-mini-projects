import { Grid, List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText  } from '@mui/material';
import { Folder, Delete } from '@mui/icons-material';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({data}) => {

    const itemsList = 
            <List sx={{marginTop: '50px' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {data.map(item => TaskItem(item))}
            </List>



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