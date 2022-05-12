
import { 
    showBottomSheet,
    isBusinessUser
} from './utils';

describe('Utils Unit Test', () => {
    const props = {
        setState: jest.fn()
    };

    describe('showBottomSheet', () => {
        it('should show bottomsheet', () => {
            showBottomSheet(props);

            expect(props.setState).toHaveBeenCalledWith(true);
        });
    });

    describe('isBusinessUser', () => {
        it('should return true when it is business user type', () => {
            const clientType = 'business'
            const actual = isBusinessUser(clientType);

            expect(actual).toEqual(true);
        });

        it('should return false when it is not business user type', () => {
            const clientType = 'personal'
            const actual = isBusinessUser(clientType);

            expect(actual).toEqual(false);
        });
    });

});