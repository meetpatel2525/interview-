import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from "../reduserce/todoslider";

const AddTodo = () => {

  const dispatch = useDispatch();

  const [state, setState] = useState({
    // content: '',
    // contentError: null,
    name: "", email: "", city: "", stet: "", password: "", age: "", address: "", profile: "", favouritecolor: "", status: ""
  });

  const { name, email, city, stet, password, age, address, profile, favouritecolor, status, contentError } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value || e.target.checked,
    });
  }

  const handleimage = (e) => {

    var file = e.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = () => {
      setState({
        ...state,
        [e.target.name]: reader.result
      });
    };


  }

  const handleChangestatus = (e) => {
    console.log({ [e.target.name]: e.target.checked });
    setState({
      ...state,
      [e.target.name]: e.target.checked,
      // [`${e.target.name}Error`]: null
    });
  }

  const add = () => {


    if (state === '') {
      setState({
        ...state,
        contentError: 'You must write something!'
      });
      return;
    }

    dispatch(addToDo({ newContent: state }));

  }


  return <div className='m-10 rounded-md w-[60%] mx-auto flex flex-col  items-center p-5 bg-[#73a5f5] '>
    <h2>What's your plan for today</h2>

    <form className='w-[100%]'>

      <div className='p-5 flex justify-between gap-4'>
        <label>Name:</label>
        <input type='text' value={name}
          name='name'
          placeholder='Enater name'
          onChange={handleChange}>

        </input>
      </div>

      <div className='p-5 flex justify-between gap-4'>
        <label>Email:</label>
        <input type='text' value={email}
          name='email'
          placeholder='Enater email'
          onChange={handleChange}>
        </input>
      </div>

      <div className='p-5 flex justify-between gap-4'>
        <label>Password:</label>
        <input type='text' value={password}
          name='password'
          placeholder='Enater password'
          onChange={handleChange}>
        </input>
      </div>

      <div className='p-5 flex justify-between gap-4'>
        <label>City:</label>

        <select name="city"
          onChange={handleChange}
          placeholder='select city'
          value={city}
        >
          <option value="">Selelct your city</option>
          <option value="suret">suret</option>
          <option value="vadodra">vadodra</option>
          <option value="ahemdabad">ahemdabad</option>
          <option value="pune">pune</option>

        </select>

      </div>

      <div className='p-5 flex justify-between gap-4'>
        <label>State:</label>

        <select name="stet"
          onChange={handleChange}
          placeholder='select state'
          value={stet}
        >
          <option value="">Selelct your state</option>
          <option value="Gujrat">Gujrat</option>
          <option value="maharashtra">maharashtra</option>
          <option value="kerla">kerla</option>
          <option value="punjab">punjab</option>

        </select>

      </div>

      <div className='p-5 flex justify-between gap-4'>

        <input type="range" onChange={handleChange}
          name="age" min="1" max="100" value={age} className="slider" id="myRange" />
        <lable>Age:{age}</lable>

      </div>

      <div className='p-5 flex justify-between gap-4'>
        <label>Address:</label>
        <input type='textarea' value={address}
          name='address'
          placeholder='Enater address'
          onChange={handleChange}>
        </input>
      </div>

      <div className='p-5 flex justify-between gap-4'>
        <label>Profile:</label>
        <input type='file'
          name='profile'
          onChange={(e) => handleimage(e)}>
        </input>
      </div>

      <div className='p-5 flex justify-between gap-4'>
        <label>Color:</label>
        <input type='color' value={favouritecolor}
          name='favouritecolor'
          onChange={handleChange}>
        </input>
      </div>

      <div className='p-5 flex justify-between gap-4'>
        <div>
          <input
            className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[rgba(0,0,0,0.25)] outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
            type="checkbox"
            value={status}
            name='status'
            onChange={handleChangestatus}
          // role="switch"
          // id="flexSwitchChecked"
          />

          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            for="flexSwitchChecked"
          >Status
          </label>
        </div>
      </div>

      <button type='button' classNameName='button'
        onClick={add}>Add
      </button>
    </form>

    {contentError ?
      <div classNameName='error'>{contentError}</div> : null}
  </div>;
};
export default AddTodo;