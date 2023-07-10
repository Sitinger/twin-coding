import React from 'react'
import logo from '../img/logo.svg'
import Box from '@mui/material/Box';
import SettingsSideBar from './SettingsSideBar/SettingsSideBar';
import MySwitch from './MySwith';
import { useLog, useSettingsRedactor } from '../store';
import Avatar from './Avatar';


//Компонент сайдбара содержащий лого, выбор темы и кнопку вызова настроек
const SideBar = ({}) => {
	const blackTheme = useSettingsRedactor(state=> state.blackTheme)
	const swapblackTheme = useSettingsRedactor(state=> state.swapblackTheme)
	const users = useLog(state=>state.users)
	const color = useLog(state=>state.color)
	const name  = useLog(state=>state.name)
	return(
		<Box sx={{
			height: "100vh", 
			width: "95px", 
			background:"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(35,35,35,1) 40%, rgba(35,35,35,1) 61%, rgba(0,0,0,1) 100%);",
			p:"10px",
			borderRight:"solid 1px #F0F0F0FF",
			display:"flex",
			flexDirection:'column',
			justifyContent:'space-between'
			}}>
			<div className="top">
				<img className="sideBar_img" src={logo}/>
				{console.log(color)}
				{console.log(name)}
				{color!=='' && name!=='' ? <Avatar color={color} name={name} /> :''}
				 
				{users.map(user=><Avatar color={user.color} name={user.name} />)}
			</div>
			<div className="bottom">
				<MySwitch onChange={()=>{swapblackTheme()}} blackTheme={blackTheme} sx={{mt:"30px"}}></MySwitch>
				<SettingsSideBar></SettingsSideBar>
			</div>
		</Box>
)
}
export default SideBar