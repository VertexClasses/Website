import React, { useEffect,useState} from 'react'
import '../Styles/StudentZone.css'
import { useNavigate } from 'react-router-dom';

const StudentZone = () => {
    const [studentData,setStudentData] = useState({});
  const navigate = useNavigate();
    const callStudentZone = async() =>{
        try{
            const res = await fetch('/studentzone',{
                method:"GET",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            setStudentData(data);
            
            if(res.ok)
            {
                console.log("Student has logged in and the student zone page is active");
            }
            else
            {
                //if error means the user isn't logged in
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
            navigate("/sign-in");
        }
    }

    useEffect(()=>{
        callStudentZone();
    },[]);

  return (
    <>
        <h1>NAME:{studentData.name}</h1>
        <h1>Mobile No:{studentData.phone}</h1>
        <h1>Email:{studentData.email}</h1>
    </>
  )
}

export default StudentZone