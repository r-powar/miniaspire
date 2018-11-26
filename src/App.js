import React, {Component} from 'react';
import './App.css';
import utils from './utils/utilities';
import AppHeader from './components/AppHeader'
import LoanApplication from './components/LoanApplication';
import LoanRepayment from './components/LoanRepayment';
import PendingApplication from './components/PendingApplication';

class App extends Component {
    constructor(props) {
        super(props);

        this.showApplication = true;
        this.showRepayment = false;

        this.state = {
            display: 'form',
            loanTypes: [],
            loanTerms: [],
            user: 'xyz',
            dob: '',
            nric: '',
            loanAmount: '',
            selectedLoanTerm: '',
            selectedLoanType: '',
            fullName: '',
            enableLoanForm: '',
            approvedLoan: false
        };

    }

    handleLoanTermChange = (e) => {
        this.setState({
            selectedLoanTerm: e.target.value
        })
    };

    handleLoanTypeChange = (e) => {
        this.setState({
            selectedLoanType: e.target.value
        });
    };

    handleLoanAmountChange = (e) => {

        this.setState({
            loanAmount: e.target.value
        })

    };

    handleDOBChange = (e) => {
        this.setState({
            dob: e.target.value
        })
    };

    handleFullNameChange = (e) => {
        this.setState({
            fullName: e.target.value
        })
    };

    handleIdChange = (e) => {
        this.setState({
            nric: e.target.value
        })
    };

    handleLoanSubmission = (e) => {
        e.preventDefault();
        //make a ajax post call with new loan application data to backend service
        // Payload will consist of following properties
        // {userId, fullName, dob,  nric, selectedLoanTerm, selectedLoanType, loanAmount}

        // Assumption: loan gets approved on a successful post
        this.setState({
            display: 'pending'
        });

    };

    componentDidMount() {
        //this is simulating a fetch(ajax) to get data of loan type and terms
        // eg: fetch('aspire/getLoanInfo')....
        utils.getLoanData().then((data) => {
            this.setState({
                loanTypes: this.state.loanTypes.concat(data.loanTypes),
                loanTerms: this.state.loanTypes.concat(data.loanTerms)
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    handleShowFormClick = () => {
        this.setState({
            display: 'form'
        });
    };

    handleShowRepaymentClick = () => {
        //make a ajax call to get loan repayment info for unique user
        // fetch('aspire/getLoanRepayment/:user')...
        // if loan approved set the view accordingly

        //simulating a fetch
        utils.getLoanRepayment().then((data) => {
            if (data.approved) {
                this.setState({
                    approvedLoan: true,
                    display: 'repayment'
                })
            } else {
                this.setState({
                    display: 'repayment'
                })
            }
        });
    };

    handleAnotherLoanApplication = () => {
        this.setState({
            display: 'form'
        })
    };

    render() {
        return (
            <div className="App">
                <AppHeader showApplication={this.handleShowFormClick} showRepayment={this.handleShowRepaymentClick}/>
                <main>
                    {this.state.display === 'form' && <LoanApplication data={this.state}
                                                                       loanTermChange={this.handleLoanTermChange}
                                                                       loanTypeChange={this.handleLoanTypeChange}
                                                                       loanAmountChange={this.handleLoanAmountChange}
                                                                       dobChange={this.handleDOBChange}
                                                                       fullNameChange={this.handleFullNameChange}
                                                                       idChange={this.handleIdChange}
                                                                       loanSubmission={this.handleLoanSubmission}
                    />}

                    {this.state.display === 'pending' && <PendingApplication handleSubmitLoan={this.handleAnotherLoanApplication} />}

                    {this.state.display === 'repayment' && this.state.approvedLoan && <LoanRepayment/>}
                    {this.state.display === 'repayment' && !this.state.approvedLoan ?
                        <div className='pendingLoanApproval'>Waiting On Loan Approval</div> : null
                    }

                </main>
            </div>
        );
    }
}

export default App;
