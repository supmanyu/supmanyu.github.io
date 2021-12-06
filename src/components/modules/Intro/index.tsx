import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'providers/ThemeProvider';
import Button from 'components/ui/Button';
import Container from 'components/ui/Container';
import Header from 'components/ui/theme/Header';
import devIllustration from 'assets/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

const Intro = () => {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hello There!</h1>
          <h2>I’m Sahitya Upmanyu, a software developer</h2>
          <Link href="#contact" passHref>
            <Button as="a">Say Hi</Button>
          </Link>
        </Details>
        <Thumbnail>
          <Image src={devIllustration} alt="I’m Sahitya, a JAMStack engineer" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
