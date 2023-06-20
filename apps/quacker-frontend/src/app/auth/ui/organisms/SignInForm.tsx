import type { ReactNode } from 'react';
import { Form, Formik } from 'formik';
import type { FormikConfig } from 'formik';
import * as yup from 'yup';

import { ErrorBanner, LoadingButton, FormikField } from '@quacker/ui';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('Password'),
});

export type SignInFormValue = {
  email: string;
  password: string;
};

export type SignInFormProps = {
  isLoading?: boolean;
  errorMessage?: string | null;
  className?: string;
  onSubmit: FormikConfig<SignInFormValue>['onSubmit'];
  children?: ReactNode;
};

export function SignInForm({
  isLoading,
  errorMessage,
  className,
  onSubmit,
  children,
}: SignInFormProps) {
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
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="e.g. john@doe.com"
          autoFocus
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
        <LoadingButton type="submit" className="mt2 mb3" loading={isLoading}>
          Sign In
        </LoadingButton>
        {children}
      </Form>
    </Formik>
  );
}
