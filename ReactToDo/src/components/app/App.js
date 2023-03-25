import { useState } from 'react';

import TaskList from '../TaskList/TaskList';
import AddForm from '../AddForm/AddForm';

import { Container } from '@mui/material';

import taskDB from '../../data/taskDB.json';
import tagsDB from '../../data/tagsDB.json';
import iconsDB from '../../data/iconsDB.json';

import './App.css';


const App = () => {
    console.log('render')
    const [data, setData] = useState(taskDB.data);
    const [tags, setTags] = useState(tagsDB.tags);
    const [icons, setIcons] = useState(iconsDB.icons)

    function addTask(item) {
        setData(data => [...data, item])
    }

    function deleteTask(id) {
        setData(data.filter(item => item.id !== id))
    }

    return (
        <Container sx={{width: '920px'}}>
            <AddForm  
                tags={tags}
                icons={icons}
                addTask={item => addTask(item)}
            />
            <TaskList 
                data={data} 
                tags={tags} 
                icons={icons}
                deleteTask={id => deleteTask(id)}
                />
            
        </Container>
    );
}

export default App;



