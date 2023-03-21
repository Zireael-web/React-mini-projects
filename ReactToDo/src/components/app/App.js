import { useState } from 'react';

import TaskList from '../TaskList/TaskList';

import { Container } from '@mui/material';

import taskDB from '../../data/taskDB.json';

import './App.css';

const App = () => {

    const [data, setData] = useState(taskDB.data);

    console.log(data)

    return (
        <Container>
            <TaskList data={data}/>
        </Container>
    );
}

export default App;



