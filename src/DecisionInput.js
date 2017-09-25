import React, { Component } from 'react';
import ShowPC from './ShowPC'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export default class DecisionInput extends Component {

 constructor(props) {
    super(props);

    this.state = {
      	question: '',
      	prodescription1: '', 
      	proweight1: 0,
        prodescription2: '', 
      	proweight2: 0,
      	prodescription3: '', 
      	proweight3: 0,
      	prodescription4: '', 
      	proweight4: 0,
      	prodescription5: '', 
      	proweight5: 0,
      	condescription1: '', 
      	conweight1: 0,
        condescription2: '', 
      	conweight2: 0,
      	condescription3: '', 
      	conweight3: 0,
        condescription4: '', 
      	conweight4: 0,
      	condescription5: '', 
      	conweight5: 0,
      	
    };
    
   
    this.handleChange = this.handleChange.bind(this)
    
    this.clearForm = this.clearForm.bind(this)
  }

  handleChange(event) {
   this.setState({
      [event.target.name]: event.target.value
    });

   console.log(this.state)



  }

  clearForm() {
	
	 this.setState({
    		question: '',
	      	prodescription1: '', 
	      	proweight1: 0,
	        prodescription2: '', 
	      	proweight2: 0,
	      	prodescription3: '', 
	      	proweight3: 0,
	      	prodescription4: '', 
	      	proweight4: 0,
	      	prodescription5: '', 
	      	proweight5: 0,
	      	condescription1: '', 
	      	conweight1: 0,
	        condescription2: '', 
	      	conweight2: 0,
	      	condescription3: '', 
	      	conweight3: 0,
	        condescription4: '', 
	      	conweight4: 0,
	      	condescription5: '', 
	      	conweight5: 0,
	    });


  }




 
  render() {
  
    
    return (
     
    	<Grid>
    	    <Row className="show-grid">
    	      <Col md={12} > 
			   	<label>
			    	<h2>My Decision</h2> 
			        	<input type="text" name="question" onChange={this.handleChange} />
				</label>
			   </Col> 
			</Row> 
			<Row className="show-grid">      	
				<Col md={6} >
					        <div>
					          <h3>Pros</h3>       		          
					        </div>
					        	<div>
					        	<strong> 1. </strong>
								</div> 				        
					        
				                <label>	 
						        description        
						          <input type="text" name="prodescription1" onChange={this.handleChange} />
						        </label>
						        <label>	    
						        weight     
						          <input type="number" name="proweight1" onChange={this.handleChange} />
						        </label>
						        <div>
					        	<strong> 2. </strong>
								</div> 
					        	<label>	 
						        description        
						          <input type="text" name="prodescription2" onChange={this.handleChange} />
						        </label>
						        <label>	    
						        weight     
						          <input type="number" name="proweight2" onChange={this.handleChange} />
						        </label>
						        <div>
					        	<strong> 3. </strong>
								</div> 
					            <label>	 
						        description        
						          <input type="text" name="prodescription3" onChange={this.handleChange} />
						        </label>
						        <label>	    
						        weight     
						          <input type="number" name="proweight3" onChange={this.handleChange} />
						        </label>
					        	<div>
					        	<strong> 4. </strong>
								</div> 
					        	<label>	 
						        description        
						          <input type="text" name="prodescription4" onChange={this.handleChange} />
						        </label>
						        <label>	    
						        weight     
						          <input type="number" name="proweight4" onChange={this.handleChange} />
						        </label>
					      		<div>
					        	<strong> 5. </strong>
								</div> 
					        	<label>	 
						        description        
						          <input type="text" name="prodescription5" onChange={this.handleChange} />
						        </label>
						        <label>	    
						        weight     
						          <input type="number" name="proweight5" onChange={this.handleChange} />
						        </label>
					       
			       </Col>
			       <Col md={6} >
			        
				       <div>	  
				          <h3>Cons</h3>       		          
				        </div>
				       			<div>
					        	<strong> 1. </strong>
								</div> 
						        <label>	 
						        description        
						          <input type="text" name="condescription1" onChange={this.handleChange} />
						        </label>
						        <label>	    
						        weight     
						          <input type="number" name="conweight1" onChange={this.handleChange} />
						        </label>
					       		<div>
					        	<strong> 2. </strong>
								</div> 
					        	<label>	 
						        description        
						          <input type="text" name="condescription2" onChange={this.handleChange} />
						        </label>
						        <label>	    
						        weight     
						          <input type="number" name="conweight2" onChange={this.handleChange} />
						        </label>
					       		<div>
					        	<strong> 3. </strong>
								</div> 
						        <label>	 
						        description        
						          <input type="text" name="condescription3" onChange={this.handleChange} />
						        </label>
						        <label>	    
						        weight     
						          <input type="number" name="conweight3" onChange={this.handleChange} />
						        </label>
					        	<div>
					        	<strong> 4. </strong>
								</div> 
					        	<label>	 
						        description        
						          <input type="text" name="condescription4" onChange={this.handleChange} />
						        </label>
						        <label>	    
						        weight     
						          <input type="number" name="conweight4" onChange={this.handleChange} />
						        </label>
					       		<div>
					        	<strong> 5. </strong>
								</div> 
					        	<label>	 
						        description        
						          <input type="text" name="condescription5" onChange={this.handleChange} />
						        </label>
						        <label>	    
						        weight     
						          <input type="number" name="conweight5" onChange={this.handleChange} />
						        </label>
						        <div>
					        
			        				<input type="submit" value="Clear" onClick={this.clearForm} />
			        			</div> 
			      </Col> 
			     </Row> 
			      <ShowPC items={this.state} /> 
			     
			   </Grid>

	  
	  
    );
  }
}