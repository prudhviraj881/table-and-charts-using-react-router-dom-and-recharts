import React from "react";
 
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import { useNavigate } from "react-router-dom";

export default function Graph() {
    const navigate = useNavigate();
    const goTo = () => {
        navigate("/Table");
    }
    const Home = () => {
        navigate('/');
    }
    const data = [
        {
            NAME:"Prudhvi",
            Telugu:98,
            English:87,
            Hindi:78,
            Maths:99,
            Science:98,
            Social:65
        },
        {
            NAME:"Inthiyaz",
            Telugu:78,
            English:99,
            Hindi:99,
            Maths:97,
            Science:88,
            Social:85
        },
        {
            NAME:"Raju",
            Telugu:88,
            English:97,
            Hindi:79,
            Maths:95,
            Science:68,
            Social:75
        },
        {
            NAME:"Nihaan",
            Telugu:90,
            English:87,
            Hindi:77,
            Maths:93,
            Science:78,
            Social:85
        },
        {
            NAME:"Neha",
            Telugu:95,
            English:80,
            Hindi:89,
            Maths:93,
            Science:98,
            Social:75
        },
        {
            NAME:"Ram",
            Telugu:91,
            English:81,
            Hindi:88,
            Maths:90,
            Science:95,
            Social:85
        }
    ];
console.log('world',data)
    return(
        <div>
             {/* <Table TableData={data} /> */}

            <h4>Graph:-</h4>
            <LineChart 
                width={700}
                height={500}
                data={data}
                margin={{
                    top:10,
                    right:50,
                    left:30,
                    bottom:10
                }}>
            <XAxis dataKey="NAME"/>
            <YAxis/>
            <CartesianGrid strokeDashoffset="5,5" />
            <Tooltip/>
            <Legend/>
            <Line type="monotoneY" stroke="#M540l2150" activeDot={{r:10}} />
            <Line type="monotoneY" stroke="#FFD700" dataKey="Telugu" />
            <Line type="monotoneY" stroke="#82ca" dataKey="Hindi" />
            <Line type="monotoneY" stroke="#7FFFD4" dataKey="English" />
            <Line type="monotoneY" stroke="#B8860B" dataKey="Maths" />
            <Line type="monotoneY" stroke="#A52A2A" dataKey="Science" />
            <Line type="monotoneY" stroke="#000080" dataKey="Social" />
            </LineChart>
            <button onClick={()=>goTo()}>Back</button>
            <button onClick={()=>Home()}>Home</button>
        </div>
    )
}