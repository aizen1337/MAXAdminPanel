import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from "../../datatablesource";
import {Link} from "react-router-dom";
import { collection, deleteDoc, getDocs,doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
const Datatable = () => {
  const [data,setData] = useState([])
    useEffect(() => {
        const querySnapshot = onSnapshot(collection(db,"users"), (snapshot) => {
          let list = [];
          snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data()});
        });
        setData(list)
      }, (err)=> {
        console.log(err);
      });
  }, []);
  const handleDelete = async(id) => {
    try {
      await deleteDoc(doc(db,"users",id));
    }
    catch(err) {
      console.log(err)
    }
  }
  const actionColumn = [{ 
    field: "action",
    headerName: "Action",
    width: 300,
    renderCell:()=> {
      return (
        <div className="cellAction">
          <Link to="/users/:id" style={{textDecoration:'none' ,color:'white'}}><div className="viewButton">View</div></Link>
          <div className="deleteButton" onClick={handleDelete}>Delete</div>
        </div>
      )
    }
  }]
    return (
      <div className="datatable">
        <div className="datatableTitle">
          <Link to="/users/new" className="link">
          Dodaj użytkownika
          </Link>
        </div>
      <DataGrid
      rows={data}
      columns={userColumns.concat(actionColumn)}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      />
      </div>
      );
}
 
export default Datatable;