import React, { useEffect } from "react";
import "./newpage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";
import {doc, setDoc, serverTimestamp } from "firebase/firestore"
import { storage, db, auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { Snackbar, handleClose } from "@mui/material";
const Newpage = ({inputs,title}) => {
    const [file, setFile] = useState("");
    const [data, setData] = useState({})
    const [percentage, setPercentage] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        const uploadFile = () =>{
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage,file.name)
           
                const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
                uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setPercentage(progress)
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setData((previous) => ({...previous, img: downloadURL}
                    ))
                });
                
            }
            ); 
                    }
                    file && uploadFile();
    },[file])
    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setData({...data, [id]: value});
    }
    const handleAdd = async(e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timestamp: serverTimestamp(),
            });
            navigate("/users")
        }
        catch(err) {
            console.log(err)
        }
    }
    return (
       <div className="newpage">
           <Sidebar/>
           <div className="newpageContainer">
               <Navbar/>
               <div className="top">
                   <h1 className="title">
                       {title}
                   </h1>
                   </div>
               <div className="bottom">
                   <div className="left">
                       <img src={file ? URL.createObjectURL(file) : 'https://www.freeiconspng.com/uploads/upload-icon-30.png'} alt="noImage" className="image" />
                   </div>
                   <div className="right">
                       <form action="" onSubmit={handleAdd} className="form">
                            <div className="formInput">
                                <label htmlFor="file">Image: <CloudUploadIcon className="icon"/></label>
                                <input type="file" name="" onChange={e=>setFile(e.target.files[0])} id="file" style={{display:"none"}}/>
                           </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} id={input.id} placeholder={input.placeholder} onChange={handleInput}/>
                                </div>
                            )
                            )}
                           <button type="submit" disabled={percentage !== null & percentage < 100}>Dodaj</button>
                        </form>
                    </div>
               </div>
           </div>
       </div>
      );
}
 
export default Newpage;