import loanInfo from '../loanInfoApi';
import loanRepayment from '../loanRepayment';

const getLoanData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(loanInfo){
                resolve(loanInfo);
            }else{
                reject(new Error('Failed Request'));
            }
        }, 1000);
    });
};


const getLoanRepayment = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(loanRepayment){
                resolve(loanRepayment);
            }else{
                reject(new Error('Failed Request'));
            }
        }, 1000);
    });
};

export default {getLoanData, getLoanRepayment}