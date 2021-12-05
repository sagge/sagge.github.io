import { getIn, useFormikContext } from 'formik';
import React, { Fragment, useMemo } from 'react';
import { FormFeedback, Input as BsInput } from 'reactstrap';

export const Input = ({
  name,
  withFeedback,
  withLoading,
  ...props
}) => {
  const {
    errors,
    values,
    isSubmitting,
    handleChange,
    handleBlur,
  } = useFormikContext();

  const error = getIn(errors, name);
  const value = getIn(values, name);

  let disabled = withLoading ? isSubmitting : false;

  if (props.disabled) {
    disabled = true;
  }

  const returnedValue = useMemo(() => {
    if (props.type === 'number') {
      return value || 0;
    }
    return value || '';
  }, [value, props.type]);

  return (
    <Fragment>
      <BsInput
        {...props}
        disabled={disabled}
        value={returnedValue}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        invalid={error ? true : false}
      />
      {withFeedback && error ? (
        <FormFeedback>{error}</FormFeedback>
      ) : (
        ''
      )}
    </Fragment>
  );
};
Input.defaultProps = {
  withLoading: true,
  withFeedback: true,
};