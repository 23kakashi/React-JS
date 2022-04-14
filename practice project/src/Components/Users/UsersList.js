import Card from "../UI/Card";
import styles from './UsersList.module.css'

const UsersList = (props) => {
  return (
    <Card>
      <ul className={styles.users}>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
