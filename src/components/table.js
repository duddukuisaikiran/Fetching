import { useState, useEffect } from 'react';
import Axios from 'axios';
import './table.css';
export function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setData(res.data.users);
        } else {
          return Promise.reject(); // Use return to propagate the rejection
        }
      })
      .catch((err) => alert(err));
  }, []);

  // Correct the tabledata function to map over the data and return JSX elements
  const tabledata = () => {
    return data.map((user) => {
      return <tr>
      <td>{user.id}</td>
      <td>
        <img src={user.image} alt="Profile" width="50" height="50" />
      </td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>{user.domain}</td>
      <td>{user.ip}</td>
      <td>{user.university}</td>
    </tr>
    }
    );
  };
  return (
    <div>
      <table >
      <caption><h2>Dummy data</h2></caption>
        <thead >
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>{tabledata()}</tbody>
      </table>
    </div>
  );
}
export default Table;