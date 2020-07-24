import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom' 
import Form from './Form'
import Pizza from './Pizza'
import Home from './Home'
import axios from 'axios'


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  toppings: { 
    pepperoni: false,
    sausage: false,
    mushrooms: false,
    olives: false,
    peppers: false,
    artichoke: false,
   },
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  instructions: '',
}

const initialPizzas = []
const initialDisabled = true

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [pizzas, setPizzas] = useState(initialPizzas)

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/pizzas', newPizza)
      .then(res => {
        setPizzas([res.data, ...pizzas])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        debugger
      })
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings, 
        [name]: isChecked, 
      }
    })
  }

  const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      instructions: formValues.instructions.trim(),

      toppings: Object.keys(formValues.toppings).filter(top => formValues.toppings[top])
    }
    postNewPizza(newPizza)
  }


  return (
    <div className='App'>
      <h1>Lambda Eats</h1>
      <header>
        <nav>
          <h1>Pizza Time!</h1>
          <div className='nav-links'>
            <Link exact to='/'>Home</Link>
            <Link to='/form'>Let's Make Some Pizza!</Link>
          </div>
        </nav>
        <Switch>
          <Route path='/form'>
            <Form 
              values={formValues}
              inputChange={inputChange}
              checkboxChange={checkboxChange}
              submit={submit}
              disabled={disabled}
              errors={formErrors}
            /> 
          </Route>
          <Route path='/'>
            <Home />
          </Route>
         </Switch>
       


      </header>
    </div>
  );
};

