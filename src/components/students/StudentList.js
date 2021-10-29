import { Fragment } from 'react';

import classes from './StudentList.module.css';

const StudentList = (props) => {
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button>
          Sort Ascending
        </button>
      </div>
      <ul className={classes.list}>
      </ul>
    </Fragment>
  );
};

export default StudentList;
