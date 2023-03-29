import { TextField } from '@mui/material'
import Button from '@miu/material/Button'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <TextField label = 'name' name='name' varient='outlined'
        value= {input,name} onchange={inputHandler}/>
        <br>
        </br>
        <TextField label = 'grade' name='author' varient='outlined'
        value={input.grade} onChange={inputHandler}/>
        <Button varient='contanined' onClick={readvales}
        color='successs'>submit</Button>
    </div>
  )
}

export default Navbar

