import { Grid, List } from '@mui/material';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({data, tags, icons, deleteTask}) => {

    const itemsList = 
            <List sx={{marginTop: '50px' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {data.map(item => TaskItem(item, tags, icons, deleteTask))}
            </List>



    return (
        <Grid item xs={12}>
            {itemsList}
        </Grid>
    )
} 

export default TaskList;
