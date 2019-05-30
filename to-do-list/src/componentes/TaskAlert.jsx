import React from 'react';

const TaskAlert = (props) => {
    return <div className="alert alert-info alert-dismissible fade show" role="alert">
          {props.task.label}
          <button type="button" className="close" aria-label="Close" onClick={props.handleDelete(this, props.task.label)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>;
}

export default TaskAlert;