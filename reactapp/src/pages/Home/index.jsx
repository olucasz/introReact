import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';


export function Home(){
    const [studentName, setStudentName] = useState();
    const [students, setStudents] = useState([]);
    const [user, setUser] = useState({name:"", avatar: ""});

    function handleAddStudents(){
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })
    }   

    setStudents(prevstate => [...prevstate, newStudent]);
    }   
    
    useEffect(() => {
        fetch("https://api.github.com/users/olucasz")
        .then((response )=> response.json())
        .then((data) => {
            setUser({
                name: data.name,
                avatar: data.avatar_url,
            })
        })
    },[]);


    return(

        <div className="container">
            <header>
                <h1>Lista de Alunos</h1>
                <div className="foto">
                    <strong>{user.name}</strong>
                    <img src={user.avatar} alt="foto"/>
                </div>
            </header>
            
            <input type="text" 
                placeholder="Digite seu Nome..."
                onChange= {(e) => setStudentName(e.target.value)}
            />

            <button type="button" onClick={handleAddStudents}
            >Adicionar</button>

            {
                students.map(student =>(
                 <Card
                    key={student.time}
                    name={student.name} 
                    time={student.time} 
                 />)
            )}
            
        </div>
    )
}
