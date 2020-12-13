import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatusFilter from '../StatusFilter/StatusFilter'
import {Button, Modal, Form} from 'react-bootstrap'
import { fetchAddTaskAC } from "../../redux/fetchAC";
import './ModalForm.css'

const ModalForm = () => {
    const dispatch = useDispatch()
    const {tasks} = useSelector(store=>store)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    const addTask = (e)=>{
        e.preventDefault()
        const task = {
            title:e.target.title.value,
            text:e.target.text.value,
            status: false,
            id: tasks.length+1 
            //Задать уникальные не получается, ограничения в mockapi
        }
        console.log(task);
        dispatch(fetchAddTaskAC(task))
        handleClose()
        e.target.text.value = ""
    }
    
    return (
        <>
                <Button onClick={handleShow} variant="success" size="lg">Новое дело</Button>
                  <Modal
                        show={show}
                        onHide={handleClose}
                        dialogClassName="modal-90w"
                        centered
                        aria-labelledby="contained-modal-title-vcenter">

                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">Заголовок</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={addTask}>
                                <Form.Group >
                                    <Form.Control type="text" name="title" placeholder="Название"size="lg" required />
                                    <Form.Text/>
                                    <Form.Control type="text" name="text" as="textarea" placeholder="Описание задачи"/>
                                </Form.Group>
                            <Button variant="success" type="submit">Создать</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        
    );
};

export default ModalForm;