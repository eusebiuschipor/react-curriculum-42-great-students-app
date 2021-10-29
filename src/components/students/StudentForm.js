import Card from '../UI/Card';
import classes from './StudentForm.module.css';

const StudentForm = (props) => {
  return (
    <>
      <Card>
        <form className={classes.form} >
          <div className={classes.control}>
            <label htmlFor='first-name'>First name:</label>
            <input type='text' id='first-name' />
          </div>
          <div className={classes.actions}>
            <button className='btn'>Add Student</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default StudentForm;
