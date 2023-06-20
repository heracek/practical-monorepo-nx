import { Heading, MainSection } from '@quacker/ui';
import { TopNavigation } from '@quacker/navigation/ui';

export type AboutTemplateProps = Record<string, never>;

export function AboutTemplate(props: AboutTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading>About Quacker</Heading>
        <p>
          Our company's mission is to collaboratively manufacture access to
          paradigms without losing sight of our original goal to interactively
          foster advantages for quality and interdependent six sigma programs
          whilst continuing to proactively simplify performance-based and
          inexpensive leadership skills.
        </p>
        <Heading size="lg">Goal</Heading>
        <p>
          Our goal is to globally and reliably revolutionise competitive
          products whilst continuing to assertively and quickly initiate
          advantages for effective and world-class six sigma programs.
        </p>
        <Heading size="lg">Vision</Heading>
        <p>
          Our vision is to assertively foster access to professional methods of
          empowerment in order to synergistically engineer advantages for
          resources whilst continuing to quickly and globally fashion
          economically sound technology.
        </p>
        <p>
          See more at{' '}
          <a href="https://lotta.se/mission-statement-generator/">
            Mission Statement Generator
          </a>
          .
        </p>
      </MainSection>
    </>
  );
}
