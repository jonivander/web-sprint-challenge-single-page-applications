import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap'

import { useHistory } from 'react-router-dom'


export default function Home() {
    const history = useHistory()

    const routeToForm = () => {
        console.log(history)
        history.push('/Form')
    }
   return(
    <div className='home-wrapper'>
        <img
        className='home-image'
        src='https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        alt=''
      />
        <h2>Hello Pizza!</h2>
        <Button color='success'
            onClick={routeToForm}
        >
            Make Some Pizza!
        </Button>
    </div>
   )
}