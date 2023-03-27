import { useState } from 'react';

import TaskList from '../TaskList/TaskList';
import AddForm from '../AddForm/AddForm';

import { Container } from '@mui/material';

import taskDB from '../../data/taskDB.json';
import tagsDB from '../../data/tagsDB.json';
import iconsDB from '../../data/iconsDB.json';
import ItemModal from '../ItemModal/ItemModal';

import './App.css';


const App = () => {
    const [data, setData] = useState(taskDB.data);
    const [tags, setTags] = useState(tagsDB.tags);
    const [icons, setIcons] = useState(iconsDB.icons)

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const handleOpen = () => setModalOpen(true);
    const handleClose = (func) => {
        func();
        setModalOpen(false);
    }

    function addTask(item) {
        setData(data => [...data, item])
    }

    function changeTask(newItem) {
        const index = data.findIndex(item => item.id === newItem.id)

        const newData = [...data];
        newData[index] = newItem;

        setData(newData);
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
                handleOpen={handleOpen}
                setModalContent={setModalContent}
            />
            

            <ItemModal
                tags={tags}
                icons={icons}
                open={modalOpen}
                handleClose={handleClose}
                modalContent={modalContent}
                changeTask={item => changeTask(item)}
            />
        </Container>
    );
}

export default App;



