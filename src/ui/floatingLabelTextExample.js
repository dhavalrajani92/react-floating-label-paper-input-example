import React,{Component} from "react"
import FloatingLabelInput from "react-floating-label-paper-input";
import ReactGA from 'react-ga';
import "./css/style.css";
class FloatingLabelTextExample extends Component{
    constructor(props){
        super(props);
        if(process.env.NODE_ENV !== "development"){
            ReactGA.initialize('UA-33570045-2');
            ReactGA.pageview(window.location.pathname);
        }

        this.handleForm = this.handleForm.bind(this);
        this.isValid = this.isValid.bind(this);
        this.getValidationMessages = this.getValidationMessages.bind(this);
        this.state = {
            formData:{}
        }
    }
    isValid(key){
        return true;
    }
    getValidationMessages(key){
        return `${key} is require`;
    }
    handleForm(key,value){
        this.setState({
          formData: Object.assign({}, this.state.formData, { [key]: value }),
        });
    }
    render(){
        var options = [
            {label: "Gujarat",value: "GJ"},
            {label: "Maharastra",value: "MH"},
            {label: "Karnataka",value: "KA"},
            {label: "Telangana",value: "TS"},
            {label: "Andhra Pradesh",value: "AP"},
        ]
        return (
            <div className={"common-form-style"}>
            <div className="form-group">
                <FloatingLabelInput type={"text"} labelName={"firstname"} onChange={(e) => {e.preventDefault();this.handleForm("firstname", e.currentTarget.value)}} name={"firstname"} value={this.state.formData.firstname ? this.state.formData.firstname : ""} isValid={this.isValid('firstname')} errorMessage={this.getValidationMessages('firstname')} />
            </div>
            <div className="form-group">
            <FloatingLabelInput type={"inputMask"} maskChar={" "} mask={"99-99-9999"} labelName={"Date of birth"} placeholder={"MM-DD-YYYYY"} onChange={(e) => {e.preventDefault();this.handleForm("dob", e.currentTarget.value)}} name={"dob"} value={this.state.formData.dob ? this.state.formData.dob : ""} isValid={this.isValid('dob')} errorMessage={this.getValidationMessages('dob')} />
            </div>
            <div className="form-group">
            <FloatingLabelInput type={"select"} options={options} labelName={"State"} onChange={(e) => {e.preventDefault();this.handleForm("state", e.currentTarget.value)}} name={"state"} value={this.state.formData.state ? this.state.formData.state : ""} isValid={this.isValid('state')} errorMessage={this.getValidationMessages('state')} />
            </div>
            </div>
        )
    }
}
export default FloatingLabelTextExample;