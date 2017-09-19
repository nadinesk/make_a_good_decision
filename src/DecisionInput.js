import React, { Component } from 'react';
import ShowPC from './ShowPC'

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
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
   this.setState({
      [event.target.name]: event.target.value
    });

   console.log(this.state)



  }

  handleSubmit(event) {
	
	console.log(this.state)

  }




 
  render() {
  
    
    return (
     <div>
	     <form onSubmit={this.handleSubmit}>
	        <div>
	        	<label>
	        		<h2>My Decision</h2> 
	        			<input type="text" name="question" onChange={this.handleChange} />
	        	</label>
		        <label>	  
		          <h3>Pros</h3>       		          
		        </label>
		        <div>
		        	<div>
				        <label>	 
				        description        
				          <input type="text" name="prodescription1" onChange={this.handleChange} />
				        </label>
				        <label>	    
				        weight     
				          <input type="number" name="proweight1" onChange={this.handleChange} />
				        </label>
			        </div>
			        <div>
			        	<label>	 
				        description        
				          <input type="text" name="prodescription2" onChange={this.handleChange} />
				        </label>
				        <label>	    
				        weight     
				          <input type="number" name="proweight2" onChange={this.handleChange} />
				        </label>
			        </div>
			        <div>
				        <label>	 
				        description        
				          <input type="text" name="prodescription3" onChange={this.handleChange} />
				        </label>
				        <label>	    
				        weight     
				          <input type="number" name="proweight3" onChange={this.handleChange} />
				        </label>
			        </div>
			        <div>
			        	<label>	 
				        description        
				          <input type="text" name="prodescription4" onChange={this.handleChange} />
				        </label>
				        <label>	    
				        weight     
				          <input type="number" name="proweight4" onChange={this.handleChange} />
				        </label>
			        </div>
			        <div>
			        	<label>	 
				        description        
				          <input type="text" name="prodescription5" onChange={this.handleChange} />
				        </label>
				        <label>	    
				        weight     
				          <input type="number" name="proweight5" onChange={this.handleChange} />
				        </label>
			        </div>
		        </div>
	        </div>
	        <div>
		       <label>	  
		          <h3>Cons</h3>       		          
		        </label>
		        <div>
		        	<div>
				        <label>	 
				        description        
				          <input type="text" name="condescription1" onChange={this.handleChange} />
				        </label>
				        <label>	    
				        weight     
				          <input type="number" name="conweight1" onChange={this.handleChange} />
				        </label>
			        </div>
			        <div>
			        	<label>	 
				        description        
				          <input type="text" name="condescription2" onChange={this.handleChange} />
				        </label>
				        <label>	    
				        weight     
				          <input type="number" name="conweight2" onChange={this.handleChange} />
				        </label>
			        </div>
			        <div>
				        <label>	 
				        description        
				          <input type="text" name="condescription3" onChange={this.handleChange} />
				        </label>
				        <label>	    
				        weight     
				          <input type="number" name="conweight3" onChange={this.handleChange} />
				        </label>
			        </div>
			        <div>
			        	<label>	 
				        description        
				          <input type="text" name="condescription4" onChange={this.handleChange} />
				        </label>
				        <label>	    
				        weight     
				          <input type="number" name="conweight4" onChange={this.handleChange} />
				        </label>
			        </div>
			         <div>
			        	<label>	 
				        description        
				          <input type="text" name="condescription5" onChange={this.handleChange} />
				        </label>
				        <label>	    
				        weight     
				          <input type="number" name="conweight5" onChange={this.handleChange} />
				        </label>
			        </div>
		        </div>
		     </div>
	        <input type="submit" value="Clear" />
	      </form>

	      <ShowPC items={this.state} /> 

	  
	  </div> 
    );
  }
}