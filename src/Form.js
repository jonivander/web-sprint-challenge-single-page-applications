import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Form (props) {
    const {
        values, 
        submit, 
        inputChange,
        checkboxChange,
        disabled, 
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckboxChange = evt => {
        const { name, value } = evt.target
        checkboxChange(name, value)
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name,value)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>

            <div className='form-group inputs'>
                <h4>What&nbsp;s your name?</h4> 
                <label>Name: 
                    <input 
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                        placeholder='Type away...'
                    />
                </label>

                    <br></br>

                <h4>Whatchu want?</h4>
                <h5>*All Fields Required*</h5>

                    <br></br>

                <h4>How big you want it?</h4>
                <label>
                    <select 
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''> - Choose your size - </option>
                        <option value='personal'>Personal (6")</option>
                        <option value='small'>Small (8")</option>
                        <option value='medium'>Medium (10")</option>
                        <option value='large'>Large (12")</option>
                        <option value='huge'>Huge (14")</option>
                    </select>
                </label>

                    <br></br>

                <h4>What kinda sauce you want?</h4>
                <label>Classic Marinara
                    <input 
                        type='radio'
                        name='sauce'
                        value='marinara'
                        checked={values.sauce === 'marinara'}
                        onChange={onInputChange}
                    />
                </label>

                <label>Garlic Alfredo
                    <input 
                        type='radio'
                        name='sauce'
                        value='alfredo'
                        checked={values.sauce === 'alfredo'}
                        onChange={onInputChange}
                    />
                </label>

                <label>Kale and Basil Pesto
                    <input 
                        type='radio'
                        name='sauce'
                        value='pesto'
                        checked={values.sauce === 'pesto'}
                        onChange={onInputChange}
                    />
                </label>

                <label>Garlic Olive Oil
                    <input 
                        type='radio'
                        name='sauce'
                        value='garlic oil'
                        checked={values.sauce === 'garlic oil'}
                        onChange={onInputChange}
                    />
                </label>

                <label>Nah, I&nbsp;m good
                    <input 
                        type='radio'
                        name='sauce'
                        value='no sauce'
                        checked={values.sauce === 'no sauce'}
                        onChange={onInputChange}
                    />
                </label>

                    <br></br>
            </div>
            <div className='form-group checkboxes'>
                <h4>What toppings you want?</h4>
                <label>Pepperoni
                    <input 
                        type="checkbox"
                        name='pepperoni'
                        checked={values.toppings.pepperoni === true}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Spicy Italian Sausage
                    <input 
                        type="checkbox"
                        name='sausage'
                        checked={values.toppings.sausage === true}
                        onChange={onCheckboxChange}
                    />
                </label>
            
                <label>Caramelized Mushrooms
                    <input 
                        type="checkbox"
                        name='mushrooms'
                        checked={values.toppings.mushrooms === true}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Black Olives
                    <input 
                        type="checkbox"
                        name='olives'
                        checked={values.toppings.olives === true}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Roasted Red Peppers
                    <input 
                        type="checkbox"
                        name='peppers'
                        checked={values.toppings.peppers === true}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Artichoke Hearts 
                    <input 
                        type="checkbox"
                        name='artichoke'
                        checked={values.toppings.artichoke === true}
                        onChange={onCheckboxChange}
                    />
                </label>
            </div>

            <div className='form-group instructions'>
                <label>
                    <input 
                        value={values.instructions}
                        onChange={onInputChange}
                        name='instructions'
                        type='text'
                        placeholder='Anything else we should know?'
                    />
                </label>
            </div>

            <div className='form-group submit'>
                <h2>You ready?</h2>
                <Link to ='/Confirmation'>
                <Button disabled={disabled}>Let&nbsp;s make some PIZZA!</Button>
                </Link>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.instructions}</div>
                </div>
            </div>
        </form>
    )
}