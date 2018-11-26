import utils from '../../utils/utilities';

describe('getLoanData from endpoint', () => {
    it('should get loan types and terms', () => {
        utils.getLoanData().then(data => {
            expect(data).toContain('loanTypes');
            expect(data).toContain('loanTerms')
        })
    })
});

describe('getLoanInfo from endpoint', () => {
    it('should get loan info data', () => {
        utils.getLoanData().then(data => {
            expect(data).toHaveProperty('user');
            expect(data).toHaveProperty('loanAmount');
            expect(data).toHaveProperty('approved');
            expect(data).toHaveProperty('loanType');
            expect(data).toHaveProperty('loanTerm');
            expect(data).toHaveProperty('nric');
        })
    })
});