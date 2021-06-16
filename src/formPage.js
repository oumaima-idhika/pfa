import React, { Component } from 'react';
import './App.css';
import './formPage.css'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
const Formpage = () => {
    return (  
        <div>
            <div className="formpage">
            <div className="navbar">
               <img src="" alt="" />
              <ul>
                 <li><Link to='/'>annuler</Link></li>
             </ul>
           </div>
            <JsonForm />
            </div>
        </div>
    );
}
 
export default Formpage;

class JsonForm extends Component{

    constructor(props){
        super(props);
        this.state={
            Gender:"Male",
            Married: "No",
            Dependents: 0,
            Education: "Graduate",
            Self_Employed: "No",
            ApplicantIncome: 0.0,
            CoapplicantIncome: 0.0,
            LoanAmount: 0.0,
            Loan_Amount_Term: 0.0,
            Credit_History: 1.0,
            Property_Area: "Urban",
            score:1
        };
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit(event){
       event.preventDefault();
       var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var bodyData = JSON.stringify({
  "Gender": this.state.Gender,
  "Married": this.state.Married,
  "Dependents": this.state.Dependents,
  "Education": this.state.Education,
  "Self_Employed": this.state.Self_Employed,
  "ApplicantIncome": this.state.ApplicantIncome,
  "CoapplicantIncome": this.state.CoapplicantIncome,
  "LoanAmount": this.state.LoanAmount,
  "Loan_Amount_Term": this.state.Loan_Amount_Term,
  "Credit_History": this.state.Credit_History,
  "Property_Area": this.state.Property_Area
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: bodyData,
  redirect: 'follow'
};

fetch("http://localhost:8000/firstPage/scoreJson/", requestOptions)
  .then(response => response.json())
  .then(result => this.setState({score:result.score}))
  .catch(error => console.log('error', error));
        
    }
    render(){
        return(
           <div>
               <div className="container">
                  <div className="row">
                       <div className="col-md-3"></div>
                       <div className="co-md-6">
                            <form onSubmit={this.handleSubmit} >
                            
                                <div className="full-element">
                                <label className="label label1">Gender</label>
                                <div className="col-md-9">
                                    <select type="text" name="Gender" className="form-control" value={this.state.Gender} onChange={this.handleChange} >
                                       <option >Male</option>
                                       <option >Female</option>
                                    </select>

                                </div>
                                </div>
                                <div className="full-element">
                                <label className="label label2 ">Married</label>
                                <div className="col-md-9">
                                   
                                    <select type="text" name="Married" className="form-control" value={this.state.Married} onChange={this.handleChange} >
                                       <option >Yes</option>
                                       <option >No</option>
                                    </select>
                                </div>
                                </div>
                                <div className="full-element">
                                <label className="label label3">Dependents</label>
                                <div className="col-md-9">
                                    <input type="text" name="Dependents" className="form-control" value={this.state.Dependents} onChange={this.handleChange}/>
                                </div>
                                </div>
                                <div className="full-element">
                                <label className="label label4">Education</label>
                                <div className="col-md-9">
                                    
                                    
                                    <select type="text" name="Education" className="form-control" value={this.state.Education} onChange={this.handleChange} >
                                       <option >Graduate</option>
                                       <option >Not Graduate</option>
                                    </select>
                                </div>
                                </div>
                                <div className="full-element">
                                <label className="label label5 ">Self_Employed</label>
                                <div className="col-md-9">
                                    
                                    <select type="text" name="Self_Employed" className="form-control" value={this.state.Self_Employed} onChange={this.handleChange} >
                                       <option >Yes</option>
                                       <option >No</option>
                                    </select>
                                </div>
                                </div>
                                <div className="full-element">
                                <label className="label label6 ">ApplicantIncome</label>
                                <div className="col-md-9">
                                    <input type="text" name="ApplicantIncome" className="form-control" value={this.state.ApplicantIncome} onChange={this.handleChange}/>
                                </div>
                                </div>
                                <div className="full-element">
                                <label className="label label7">CoapplicantIncome</label>
                                <div className="col-md-9">
                                    <input type="text" name="CoapplicantIncome" className="form-control" value={this.state.CoapplicantIncome} onChange={this.handleChange}/>
                                </div>
                                </div>
                                <div className="full-element">
                                <label className="label label8 ">LoanAmount</label>
                                <div className="col-md-9">
                                    <input type="text" name="LoanAmount" className="form-control" value={this.state.LoanAmount} onChange={this.handleChange}/>
                                </div>
                                </div>
                                <div className="full-element">
                                <label className="label label9 ">Loan_Amount_Term</label>
                                <div className="col-md-9">
                                    <input type="text" name="Loan_Amount_Term" className="form-control" value={this.state.Loan_Amount_Term} onChange={this.handleChange}/>
                                </div>
                                </div>
                                <div className="full-element">
                                <label className="label label10 ">Credit_History</label>
                                <div className="col-md-9">
                                    
                                    <select type="text" name="Credit_History" className="form-control" value={this.state.Credit_History} onChange={this.handleChange} >
                                       <option >1.0</option>
                                       <option >0.0</option>
                                    </select>
                                </div>
                                </div>
                                <div className="full-element">
                                <label className="label label11 ">Property_Area</label>
                                <div className="col-md-9">
                                    
                                    <select type="text" name="Property_Area" className="form-control" value={this.state.Property_Area} onChange={this.handleChange} >
                                       <option >Urban</option>
                                       <option >Rural</option>
                                    </select>
                                </div>
                                </div>
                                 <button type='submit'><span></span>submit</button>
                                 
                            </form>
                            <div className="result"><p>la probabilite pour que votre credit soit accepte est:{this.state.score}</p></div>
                            </div>
                       
                       <div className="col-md-3"></div>
                       
                   </div>
               </div>
           </div>
        );

    }
}