import React, { Component } from 'react';

export default class DecisionInput extends Component {

 constructor(props) {
    super(props);

   
    
   
  }

  
  render() {
  const total_pro = parseFloat(this.props.items.proweight1) + parseFloat(this.props.items.proweight2) +
   					parseFloat(this.props.items.proweight3) + parseFloat(this.props.items.proweight4) + 
   					 parseFloat(this.props.items.proweight5) 
  const total_con = parseFloat(this.props.items.conweight1) + parseFloat(this.props.items.conweight2) + 
  					parseFloat(this.props.items.conweight3) + parseFloat(this.props.items.conweight4) + 
  					parseFloat(this.props.items.conweight5)

    return (
     <div><br />
     	<div>The Question is: {this.props.items.question} </div>
     	<div>
	     	<h3>Pros </h3>
	     		<p> {this.props.items.prodescription1} </p> 
	     		<p>{this.props.items.proweight1}</p>
	     		<p> {this.props.items.prodescription2} </p> 
	     		<p>{this.props.items.proweight2}</p>
	     		<p> {this.props.items.prodescription3} </p> 
	     		<p>{this.props.items.proweight3}</p>
	     		<p> {this.props.items.prodescription4} </p> 
	     		<p>{this.props.items.proweight4}</p>
	     		<p> {this.props.items.prodescription5} </p> 
	     		<p>{this.props.items.proweight5}</p>
	     		<p>{total_pro}</p>
	     </div>

		<div>
	     	<h3>Pros </h3>
	     		<p> {this.props.items.condescription1} </p> 
	     		<p>{this.props.items.conweight1}</p>
	     		<p> {this.props.items.condescription2} </p> 
	     		<p>{this.props.items.conweight2}</p>
	     		<p> {this.props.items.condescription3} </p> 
	     		<p>{this.props.items.conweight3}</p>
	     		<p> {this.props.items.condescription4} </p> 
	     		<p>{this.props.items.conweight4}</p>
	     		<p> {this.props.items.condescription5} </p> 
	     		<p>{this.props.items.conweight5}</p>
	     		<p>{total_con}</p>
	     </div>

	     <div>Total</div>
	     <div>{total_pro - total_con}</div>
	     <div>To Do, or Not To Do </div>	     
	     {total_pro - total_con === 0 ? "TBD" : total_pro - total_con > 0 ? "You should do it" : "You should not do it"}
     		 
	  </div> 
    );
  }
}