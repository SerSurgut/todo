import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {id} = useParams()
    const task = JSON.parse(localStorage.getItem(id))
     return (
        <div>
            <h1 className="text-center title">{task&&task.text}</h1>
            <div className="detail-block">Заголовок</div>
        </div>
    );
};

export default Detail;