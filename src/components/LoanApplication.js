import React, {Component} from 'react';

//import PropTypes from 'prop-types';

class LoanApplication extends Component {
    constructor(props) {
        super(props);
    }

    canApplyLoan = () => {
        const {dob, nric, loanAmount, selectedLoanTerm, selectedLoanType, fullName} = this.props.data;
        return dob.length && nric.length && loanAmount.length && loanAmount > '0' && selectedLoanTerm.length && selectedLoanType.length && fullName.length;
    };

    render() {
        this.props.data.enableLoanForm = this.canApplyLoan();
        return (
            <div className='mainApplication'>
                <h4>Apply for a Loan</h4>
                <form onSubmit={this.props.loanSubmission} className='loanApp'>
                    <div className="form-group">
                        <label htmlFor="exampleInputFullName">Full Name</label>
                        <input type="text" className="form-control" id="exampleInputFullName"
                               aria-describedby="fullNameInfo" placeholder="Enter Full Name"
                               onChange={this.props.fullNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="datepicker">Date Of Birth</label>
                        <input type="date" id="datepicker" aria-describedby="dobInfo" className="form-control"
                               placeholder="DOB" onChange={this.props.dobChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="idNumber">NRIC / Identity Number</label>
                        <input type="text" className="form-control" id="idNumber"
                               aria-describedby="idInfo" placeholder="Eg: S032312G" onChange={this.props.idChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="selectLoanType">Loan Type</label>
                        <select className="form-control" id="selectLoanType" aria-describedby="loanTypeInfo"
                                onChange={this.props.loanTypeChange}>
                            <option key="0" value="" disabled selected>Select Loan Type</option>
                            {this.props.data.loanTypes.map((val, idx) =>
                                <option key={idx + 1}>{val}</option>
                            )}

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="loanAmount">Loan Amount</label>
                        <input type="number" className="form-control" id="loanAmount"
                               aria-describedby="loanAmountInfo" placeholder="Enter Loan Amount"
                               pattern="^-?[0-9]\d*\.?\d*$"
                               onChange={this.props.loanAmountChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="loanTerm">Loan Term</label>
                        <select onChange={this.props.loanTermChange} className="form-control" id="loanTerm"
                                aria-describedby="loanTermInfo">
                            <option key="0" value="" disabled selected>Select Loan Term</option>
                            {this.props.data.loanTerms.map((val, idx) =>
                                <option key={idx + 1} value={val.toString()}>{val} months</option>
                            )}
                        </select>
                    </div>

                    <button className='btn loanBtn' disabled={!this.props.data.enableLoanForm}>Submit
                    </button>
                </form>
            </div>
        )
    }
}

LoanApplication.defaultProps = {
    data: {
        dob: '',
        nric: '',
        loanAmount: '',
        selectedLoanTerm: '',
        selectedLoanType: '',
        fullName: '',
        loanTerms: [],
        loanTypes: []
    }
};

export default LoanApplication;
