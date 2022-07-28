export * from '@screens/Bottom/Contact/action';
export * from './general/action';

export const _onSuccess = action => action + '_SUCCESS';
export const _onFail = action => action + '_FAIL';
export const _onComplete = action => action + '_COMPLETE';
export const _onUnmount = action => action + '_UNMOUNT';
