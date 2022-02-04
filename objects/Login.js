import { StyleSheet, Text, View } from 'react-native';
import { useRef } from 'react';

//var [loggedIn, logIn] = useState(false);
function thing(props){
	setTimeout(props.update, 5000);
}
var loggedIn = false
function Login(props){
	const username = useRef();
	const password = useRef();
	return (
		<>
			<form onSubmit={(e) => {login(e, props)}}>
				<label for="username">Username:</label><br/>
				<input ref={username} id="username" type="text"/><br/>
				<label for="password">Password:</label><br/>
				<input ref={password} id="password" type="password"/><br/>
				<input type="submit" value="Log In"/>
			</form>
		</>
	);
}

function login(e, props){
	e.preventDefault;
	loggedIn = true;
	props.update();
}

export { Login, loggedIn };