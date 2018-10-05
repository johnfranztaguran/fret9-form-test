import React, {Component} from 'react'
import LoginBox from './components/Login'
import RegisterBox from './components/Register'
import firebaseApp from './components/firebase'
import Home from './components/Home'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      email: '',
      password: "",
      user: {},
      error: {
        message: ""
      }
    };
    this.handleChangeEmReg = this.handleChangeEmReg.bind(this)
    this.handleChangePassReg = this.handleChangePassReg.bind(this)
    this.handleChangeEmLog = this.handleChangeEmLog.bind(this)
    this.handleChangePassLog = this.handleChangePassLog.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.logout = this.logout.bind(this)
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null });
      }
    })
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  handleChangeEmReg(emailsReg) {
    console.log(emailsReg.target.value)
    this.setState({
      email: emailsReg.target.value
    })
  }
  handleChangePassReg(passReg) {
    console.log(passReg.target.value)
    this.setState({
      password: passReg.target.value
    })
  }
  handleChangeEmLog(emailsLog) {
    console.log(emailsLog.target.value)
    this.setState({
      email: emailsLog.target.value
    })
  }
  handleChangePassLog(passLog) {
    console.log(passLog.target.value)
    this.setState({
      password: passLog.target.value
    })
  }

  login(e) {
    console.log("hey", e)
    e.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        // console.log("error", error)
        this.setState({ error })
      })

  }

  signup(e) {
    e.preventDefault();
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log("error", error)
        this.setState({ error })
      })
  //  this.state.email = ''
  //   this.state.password = ''  
  }

  logout() {
    firebaseApp.auth().signOut();
  }

  deleteUser() {
    const user = firebaseApp.auth().currentUser;
    user.delete()
      .then((user) => {
        alert("successfully delete")
        console.log("deleted", user)
      })
      .catch((error) => {
        console.log("error", error)
        this.setState({ error })
      })
  }

  render() {
    if(this.state.user){
      return(
        <Home deleteUser={this.deleteUser} logout={this.logout} error={this.state.error} />
      )
    }else{
      return (
        <div className="root-container">
          <div className="box-container">
            {this.state.isLoginOpen && <LoginBox
              login={this.login}
              handleChangeEmLog={this.handleChangeEmLog}
              handleChangePassLog={this.handleChangePassLog}
              errorMessage={this.state.error.message}
            />}

            {this.state.isRegisterOpen && <RegisterBox
              handleChangeEmReg={this.handleChangeEmReg}
              handleChangePassReg={this.handleChangePassReg}
              signup={this.signup}
              errorMessage={this.state.error.message}
            />}


            <div className="box-controller">
              <div className={"controller " + (this.state.isLoginOpen
                ? "selected-controller" : "")}
                onClick={this.showLoginBox.bind(this)}>
                Login
          </div>
              <div className={"controller " + (this.state.isRegisterOpen
                ? "selected-controller" : "")}
                onClick={this.showRegisterBox.bind(this)}>
                Register
          </div>
            </div>

          </div>


        </div>
      );
    }
    
    
  }
}
export default App