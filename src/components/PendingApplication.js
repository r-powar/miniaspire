import React, {Component} from 'react';

class PendingApplication extends Component{
    render(){
        return(
            <div className='pendingApplication'>
                <div>Waiting on Approval, in the mean time you can submit another application</div>
                <button onClick={this.props.handleSubmitLoan} className='btn btn-lg loanBtn'>Submit Loan</button>
            </div>
        )
    }
}

export default PendingApplication;