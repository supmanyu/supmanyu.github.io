import Image from 'next/image';
import social from './social.json';
import Container from 'components/ui/Container';
import GithubIcon from 'assets/social/github.svg';
import LinkedinIcon from 'assets/social/linkedin.svg';
import { Wrapper, Flex, Links, Details } from './styles';

const icons = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
};

const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            ☕
          </span>{' '}
          by{' '}
          <a href="https://www.github.com/supmanyu" rel="noopener noreferrer" target="_blank">
            Sahitya
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <Image width={24} height={24} layout="fixed" src={icons[name]} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);

export default Footer;
