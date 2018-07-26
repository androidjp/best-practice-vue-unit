import LoginValidator from '@/validator/LoginValidator'

describe('LoginValidator.js', () => {
    it('should return pass if password\' length bigger than 5.', () => {
        expect(LoginValidator.validateLoginParams('Ming', '123456'))
        .to.equal('pass')
    })

    it('should return false if password\' length less than 5.', () => {
        expect(LoginValidator.validateLoginParams('Ming', '12345'))
        .to.equal('password too short.')
    })
})
