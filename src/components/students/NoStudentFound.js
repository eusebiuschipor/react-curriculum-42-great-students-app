import classes from './NoStudentsFound.module.css';

const NoStudentsFound = () => {
  return (
    <div className={classes.nostudents}>
      <p>No students found!</p>
      <a className='btn'>
        Add a Student
      </a>
    </div>
  );
};

export default NoStudentsFound;
