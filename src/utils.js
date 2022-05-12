// @flow
import type {
    Props,
    StringFunction,
    Validation
} from './utls.types';

export const showBottomSheet = (props: Props): void => {
    const { setState } = props;

    setState(true);
};

export const closeBottomSheet = (props: Props): void => {
    const { setState } = props;

    setState(false);
};

export const navigateToPaymentScreen = (props: Props): void => {
    const { navigation, setState } = props;

    setState((prevState) => ({ ...prevState, paymentStatus: 'UNPAID' }));
    navigation.navigateTo('PAYMENT_SCREEN');
};

export const validateRegex = (validation: Validation): StringFunction => (value) => {
    const validator = new RegExp(validation.regexFormat);
    const valid = validator.test(value);
  
    if (!valid) return validation.regexErrorDesc;
    return undefined;
};

export const isBusinessUser = (clientType: string): boolean => {
    return clientType === 'business'
};
