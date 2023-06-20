import { Heading, Link, MainSection } from 'src/ui';
import { TopNavigation } from 'src/navigation/ui';
import { route } from 'src/Routes';

import { SignUpForm } from '../organisms/';
import type { SignUpFormProps } from '../organisms/';

export type SignUpTemplateProps = {
  isLoading?: boolean;
  error?: Error | null;
  onSubmit: SignUpFormProps['onSubmit'];
};

export function SignUpTemplate({
  isLoading,
  error,
  onSubmit,
}: SignUpTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading>Sign Up</Heading>

        <SignUpForm
          isLoading={isLoading}
          errorMessage={error && error.message}
          onSubmit={onSubmit}
          className="mt3"
        >
          <div className="lh-copy">
            or{' '}
            <Link className="f5 dark-green" to={route.signIn()}>
              Sign In
            </Link>
          </div>
        </SignUpForm>
      </MainSection>
    </>
  );
}
