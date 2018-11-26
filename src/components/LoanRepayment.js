import React, {Component} from 'react';

class LoanRepayment extends Component{
    render(){
        return(
            <div className='loanRepayment'>
                <h4>Repay Loan</h4>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="selectLoanAmount">Repay Loan Amount</label>
                        <select className="form-control" id="selectLoanAmount" aria-describedby="loanRepayAmount"
                                onChange={this.props.loanTypeChange}>
                            <option key="0" value="100">S$100</option>
                        </select>
                    </div>
                    <button type='submit' className='btn btn-lg loanBtn'>Pay
                    </button>
                </form>
            </div>
        )
    }
}

export default LoanRepayment;