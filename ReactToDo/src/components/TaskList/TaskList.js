import { Grid, List, TextField, MenuItem } from '@mui/material';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {

    const content = (props.data.length) ? <View {...props}/> : <NoView/>;

    return (
        <Grid item xs={12}>
            <Grid>
            <TextField
                /* error={errorInput} */
                /* onChange={(e) => {
                    validateInput(e)
                    setName(e.target.value)
                }} */
                value={'name'}
                sx={{width: '100%'}}
                id="name"
                name="name" 
                label="Enter Task Name" 
                variant="standard"
                />
            <TextField
                    /* onChange={(e) => {
                        validateError(e)
                        setTag(e.target.value)
                    }} */
                    value={''}
                    size="small"
                    sx={{width: '150px'}}
                    id="tag"
                    name="tag"
                    /* error={errorSelect} */
                    select
                    label="Tag"
                    >
                    {props.tags.map((item) => (
                        <MenuItem
                        key={item.id}
                        /* onClick={e => handleCurTagId(e, item.id)} */
                        value={item.name}>
                        {item.name}
                        </MenuItem>
                    ))}
            </TextField>
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
