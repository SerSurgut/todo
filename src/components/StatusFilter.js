import React from 'react';

const StatusFilter = () => {
    return (
        <div className="btn-group">
          <button type="button"
                  className="btn btn-primary">Все</button>
          <button type="button"
                  className="btn btn-outline-secondary">Активные</button>
          <button type="button"
                  className="btn btn-outline-secondary">Завершённые</button>
        </div>
    );
};

export default StatusFilter;
