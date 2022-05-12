// @flow

export type StringFunction = (string) => ?string;

export type Navigation = {|
    navigateTo: (string) => void
|};

export type Props = {|
    setState: (Object) => void,
    navigation: Navigation
|};

export type Validation = {|
    regexErrorDesc: string,
    regexFormat: string
|};