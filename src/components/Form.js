import React from 'react';
import StatusFilter from './StatusFilter'
const Form = () => {
    return (
        <form>
            <div className="form-group mt-2  d-flex">
                <input type="text" className="form-control mr-3" placeholder="Текст..."/>
                 <StatusFilter/>
            </div>
           
        </form>
        
    );
};

export default Form;