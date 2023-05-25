import React from 'react'
import { useForm} from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import axios from 'axios'
import {MapContainer, TileLayer, Marker, Popup, Tooltip, CircleMarker, Polygon} from 'react-leaflet'

const colorOptions={color:'purple'}
const centerPolygon=[
  [47.192877, 39.614586],
  [47.258999, 39.932146],
  [47.356195, 39.803021],
  [47.301678, 39.619893]

]
const center=[47.222119, 39.720286]

const Form = () => {
  const { register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = (data) =>{
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data);


  }

  return (   
    <div>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Заполните заявку на обратную связь</h1>
        <div className='input-group mb-3'>
          < input
          {...register('lastName',{
            required:true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Фамилия'/>
        </div>
        {errors?.lastName?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.lastName?.type === 'maxLength'&&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.lastName?.type === 'pattern'&&(
          <p>Поле заполнено не корректно</p>
        )}

        <div className='input-group mb-3'>
          < input
          {...register('name',{
            required:true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Имя'/>
        </div>
        {errors?.name?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.name?.type === 'maxLength'&&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.name?.type === 'pattern'&&(
          <p>Поле заполнено не корректно</p>
        )}

       <div className='input-group mb-3'>
          < input
          {...register('patronymic',{
            required:true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Отчество'/>
        </div>
        {errors?.patronymic?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.patronymic?.type === 'maxLength'&&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.patronymic?.type === 'pattern'&&(
          <p>Поле заполнено не корректно</p>
        )}
        
        <div className='input-group mb-3'>
          < input
          {...register('mail',{
            required:true,
            maxLength:50,
            pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
          })}
          type='email'
          className='form-control'
          placeholder='E-mail'/>
        </div>
        {errors?.mail?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.mail?.type === 'maxLength'&&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.mail?.type === 'pattern'&&(
          <p>Поле заполнено не корректно</p>
        )}
        <input className='btn btn-outline-primary' type="submit" />
      </form>
      <br></br>
      <MapContainer 
      center={center}
      zoom={10} 
      style={{
          width:'100vw',
          height:'500px'
       }} >
        <TileLayer
        url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=IbQcF2H1e6Mzfq6CjR8A'
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        <CircleMarker
        center={center}
        pathOptions={{color:'black'}}
        radius={10}
        />

        <Marker position={center}>
          <Popup>(При нажатии) Мы находимся тут</Popup>
          <Tooltip>(При наведении) Мы находимся тут</Tooltip>

        </Marker>

        <Polygon positions={centerPolygon} pathOptions={colorOptions}/>

      </MapContainer>
    </div>
  );
}
  


export default Form