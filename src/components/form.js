import React from 'react';

const Form = props => (
    <form action="" onSubmit={props.weatherMethod}>
                <input type="text" name="city" placeholder="City"/>
                <button>Get Weather</button>
            </form>
);

export default Form;