import React, {Component} from 'react';

class AppHeader extends Component{
    render(){
        return(
            <header className='appHeader'>
                <div className='headerContent' onClick={this.props.showApplication}>Loan Application</div>
                <div className='headerContent' onClick={this.props.showRepayment}>Loan Repayment</div>
            </header>
        )
    }
};

export default AppHeader;