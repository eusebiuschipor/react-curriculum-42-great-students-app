import { Link } from 'react-router-dom';
import classes from './StudentItem.module.css';

const StudentItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p></p>
        </blockquote>
        <figcaption></figcaption>
      </figure>
      <Link to={} className='btn'>
        View Fullscreen
      </Link>
    </li>
  );
};

export default StudentItem;
