import { Grid, List} from '@mui/material';
import SortingMenu from '../SortingMenu/SortingMenu';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {

    const content = (props.data.length) ? <View {...props}/> : <NoView/>;

    return (
        <Grid item xs={12}>
            <Grid>
            <SortingMenu
                sx={{mt: '45px'}}
                tags={props.tags}
            />
            </Grid>
            {content}
        </Grid>
    )
} 

const NoView = () => {
    return (
    <div
        style={{fontSize: '25px', textAlign: 'center', marginTop: '55px'}}
        >
        There is no tasks yet. Try adding one!
    </div>)              
}

const View = ({data, tags, icons, deleteTask, handleOpen, setModalContent}) => {

    return (
        <List sx={{marginTop: '50px' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {data.map(item => TaskItem(item, tags, icons, deleteTask, handleOpen, setModalContent))}
        </List>
    )
}

export default TaskList;
