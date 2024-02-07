import React, { useState } from 'react'
import "./Home.css";
import {Button, MenuItem, TextField} from "@mui/material"
import Categories from '../../Data/Categories';

const Home = () => {

  const [category,setCategory] = useState("");
  const [difficulty,setDifficulty] = useState("");
  const [error,setError] = useState(false);

  return (
    <div className='content'>
        <div className='settings'>
            <span style={{fontSize:30}}>Quiz Settings</span>

            <div className='settings__select'>
                <TextField
                style={{ marginBottom: 25 }}
                label="Enter Your Name"
                variant="outlined"
                />

                <TextField
                select
                label= "Select Category"
                variant="outlined"
                style={{ marginBottom: 30 }}
                >
                {Categories.map((cat) =>(
                    <MenuItem key={cat.category} value={cat.value} >
                      {cat.category}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                select
                label="Select Difficulty"
                variant='outlined'
                style={{marginBottom:30}}
                >
                  <MenuItem key="Easy" value="easy" >
                  Easy
                  </MenuItem>
                  <MenuItem key="Medium" value="medium" >
                  Medium
                  </MenuItem>
                  <MenuItem key="Hard" value="hard" >
                    Hard
                  </MenuItem>
                </TextField>

                <Button
                 variant='contained'
                 color='primary'
                 size='large'
                >
                  Start Quiz
                </Button>

            </div>
        </div>

        <img src='/Quiz.svg' className='banner' alt='Quiz img'/>
    </div>
  )
}

export default Home
