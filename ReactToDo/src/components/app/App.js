import { useState } from 'react';

import TaskList from '../TaskList/TaskList';
import AddForm from '../AddForm/AddForm';

import { Container } from '@mui/material';

import taskDB from '../../data/taskDB.json';
import tagsDB from '../../data/tagsDB.json';
import iconsDB from '../../data/iconsDB.json';

import './App.css';


const App = () => {
    const [data, setData] = useState(taskDB.data);
    const [tags, setTags] = useState(tagsDB.tags);
    const [icons, setIcons] = useState(iconsDB.icons);

    return (
        <Container sx={{width: '920px'}}>
            <AddForm  tags={tags} icons={icons}/>
            <TaskList data={data}/>
        </Container>
    );
}

export default App;



