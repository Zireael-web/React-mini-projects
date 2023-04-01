import { Grid, List} from '@mui/material';
import { useEffect, useState } from 'react';
import SortingMenu from '../SortingMenu/SortingMenu';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {

    const [curTagId, setCurTagId] = useState('');
    const [curName, setCurName] = useState('');
    const [sortedData, setSortedData] = useState(props.data);

    useEffect(() => {
        sortAll()
    }, [props.data, curTagId, curName])

    function handleCurName(name) {
        setCurName(name.toLowerCase())
    }

    function handleCurTagId(tag) {
        let id;
        (tag) ? id = props.tags.find(item => item.name === tag).id : id = '';
        setCurTagId(id)
    }

    function sortAll() { 
        const sortedByTag = sortByTag(props.data)
        const sortedByAll = sortByName(sortedByTag)
        setSortedData(sortedByAll)
    }

    function sortByTag(data) {
        return (curTagId !== '') ? data.filter(item => (item.tagId === curTagId)) : data;
    }

    function sortByName(data) {
        return (curName) ? data.filter(item => item.name.toLowerCase().includes(curName)) : data;
    }



    const content = (props.data.length) ? <View {...props} sortedData={sortedData}/> : <NoView/>;

    return (
        <Grid item xs={12}>
            <Grid>
            <SortingMenu
                sx={{mt: '45px'}}
                tags={props.tags}
                handleCurName={name => handleCurName(name)}
                handleCurTag={tag => handleCurTagId(tag)}
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

const View = ({tags, icons, deleteTask, handleOpen, setModalContent, sortedData}) => {

    return (
        (sortedData.length > 0) 
        ?
        <List sx={{marginTop: '50px' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {sortedData.map(item => TaskItem(item, tags, icons, deleteTask, handleOpen, setModalContent))}
        </List>
        :
        <div
        style={{fontSize: '25px', textAlign: 'center', marginTop: '55px'}}
        >
        There is no tasks which meet the filters.
        </div>     
    )
}

export default TaskList;
