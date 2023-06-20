import type { ReactNode } from 'react';
import { Form, Formik } from 'formik';
import type { FormikConfig } from 'formik';
import * as yup from 'yup';

import { ErrorBanner, FormikField, LoadingButton } from '@quacker/ui';

const initialValues = {
  email: '',
  name: '',
  password: '',
  passwordConfirmation: '',
  userName: '',
};

const schema = yup.object().shape({
  email: yup.string().email().required().label('Email'),
  name: yup.string().required().label('Name'),
  password: yup.string().required().label('Password'),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .label('Password Confirmation'),
  userName: yup.string().required().label('Username'),
});

export type SignUpFormValue = {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
  userName: string;
};

export type SignUpFormProps = {
  isLoading?: boolean;
  errorMessage?: string | null;
  className?: string;
  onSubmit: FormikConfig<SignUpFormValue>['onSubmit'];
  children?: ReactNode;
};

export function SignUpForm({
  isLoading,
  errorMessage,
  className,
  onSubmit,
  children,
}: SignUpFormProps) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={schema}
      validateOnBlur={false}
    >
      <Form className={className}>
        {errorMessage && <ErrorBanner title={errorMessage} className="mb3" />}
        <FormikField
          id="name"
          name="name"
          label="Name"
          type="text"
          autoFocus
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <FormikField
          id="userName"
          name="userName"
          label="Username"
          type="text"
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <FormikField
          id="email"
          name="email"
          label="Email"
          type="text"
          placeholder="e.g. john@doe.com"
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <FormikField
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <FormikField
          id="passwordConfirmation"
          name="passwordConfirmation"
          label="Password Confirmation"
          type="password"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <LoadingButton type="submit" className="mt2 mb3" loading={isLoading}>
          Sign Up
        </LoadingButton>
        {children}
      </Form>
    </Formik>
  );
}
