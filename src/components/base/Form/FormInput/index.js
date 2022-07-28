import {TextInput} from '@components';
import React from 'react';
import {Controller} from 'react-hook-form';

const FormInput = ({name, control, defaultValue = '', ...rest}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}, formState: {errors, isDirty}}) => (
        <TextInput
          {...rest}
          value={value}
          onChangeText={text => {
            onChange(text);
            rest.onChangeText && rest.onChangeText(text);
          }}
          isDirty={isDirty}
          isError={errors[name]}
          errorText={rest.errorText || errors[name]?.message}
        />
      )}
      defaultValue={defaultValue}
    />
  );
};

export default FormInput;
