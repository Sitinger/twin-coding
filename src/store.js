import create from 'zustand'

// Стор состояний созданный с помощью Zushtand
// Zushtand - простой стейтменеджер 
export const useSettingsRedactor = create((set, get) =>({
	language:'',
	tabSize:3,
	blackTheme: false,
	cursorLabel: false,
	textCursorLabel: false,
	
	setLanguage:(value)=>{
		set({language: value})
	},
	setTabSize:(value)=>{
		set({tabSize:value})
	},
	swapblackTheme:()=>{
		set({blackTheme:!get().blackTheme})
	},
	setCursorLabel:(value)=>{
		set({cursorLabel:value})
	},
	swapCursorLabel:()=>{
		set({cursorLabel:!get().cursorLabel})
	},
	swapTextCursorLabel:()=>{
		set({textCursorLabel:!get().textCursorLabel})
	}
}))

export const useLog = create((set, get)=>({
	id:'',
	name:'',
	room:0,
	color:'',
	users:[],
	markers:[],

	setMarkers(value){
		const markers = value.filter(marker=>marker.id!==get().id)
		set({markers:markers})
	},
	setUsers(value){
		const users = value.filter(user=>user.id!==get().id)
		set({users:users})
	},
	setId:(value)=>{
		set({id:value})
	},
	setName:(value)=>{
		set({name:value})
	},
	setRoom:(value)=>{
		set({room:value})
	},
	setColor:(value)=>{
		set({color:value})
	},
}))

export const useRedactor = create((set, get) =>({
	allowСhange:false,
	redactorValue:'',
	textCursorPosition:{
		column:0,
		row:0
	},
	cursorPosition:{
		X:0,
		Y:0
	},

	setStartRedactorValue:(value)=>{
		set({redactorValue:value})
		set({allowСhange:true})
	},
	setRedactorValue:(value)=>{
			set({redactorValue:value})
	},
	setCursorPosition(x,y){
		set({cursorPosition:{X:x,Y:y}})
	},
	setTextCursorPosition(x,y){
		set({textCursorPosition:{column:x,row:y}})
	},

}))

