/**
 * @format
 * @ts-check
 */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Fill,
  Fit,
  Layout,
  Link,
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Notes,
  ComponentPlayground,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
import 'normalize.css';
import './styles.css';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    dark: 'rgb(32, 32, 35)',
    skype: '#00ABE8',
    comment: 'green',
    red: 'rgb(246, 54, 27)',
  },
  {
    primary: '"Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
  }
);

const images = {
  sqiglyBg: require('../assets/background.png'),
  clients: require('../assets/clients.png'),
  architecture: require('../assets/architecture.png'),
  xp: require('../assets/xp.jpg'),
  responsivness: require('../assets/responsivness.png'),
};

const style = {
  bubble: {
    blue: {
      backgroundColor: 'rgb(22, 134, 217)',
      borderRadius: 5,
      color: 'white',
      padding: 10,
      margin: 10
    }
  },
  iframe: {
    height: 700,
    width: '100%',
    border: 0,
    overflow: 'hidden'
  }
};

const Bubble = ({ textSize, children, backgroundColor }) => {
  const backgrounStyle = backgroundColor
    ? { backgroundColor: backgroundColor }
    : {};

  return (
    <Text textSize={textSize} style={{ ...style.bubble.blue, ...backgrounStyle }}>
      {children}
    </Text>
  );
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['fade']} bgColor="skype">
          <Layout style={{ flexDirection: 'column' }}>
            <Fill style={{ paddingBottom: '4.5em' }}>
              <Heading textColor="primary" textAlign="left" style={ { lineHeight: '2em' } }>
                Hi! 
              </Heading>
              <Heading textColor="primary" textAlign="left" style={ { whiteSpace: "pre-wrap" } }>
              I'm Miguel. 😋
              </Heading>
            </Fill>

            <Fit style={{ paddingBottom: '2em' }}>
              <Text textColor="primary" textAlign="left" textSize={'1.5rem'}>
                Miguel Caballero Pinto
              </Text>
              <Text textColor="primary" textAlign="left" textSize={'1.5rem'}>
                Senior Software Engineer
              </Text>
              <Text textColor="primary" textAlign="left" textSize={'1.5rem'}>
              Skype | Microsoft
              </Text>
            </Fit>

            <Fit>
              <Layout>
                <Fill>
                  <Text textColor="primary" textAlign="left" textSize={'1.5rem'}>
                    Twitter: @MCaballeroPinto
                  </Text>
                </Fill>
              </Layout>
            </Fit>
          </Layout>
        </Slide>

        <Slide>
          <Heading style={{ marginBottom: '1em' }}>Skype</Heading>
          <Text style={{ marginBottom: '0.5em' }}>14 years old</Text>
          <Text style={{ marginBottom: '0.5em' }}>Recognized as a verb</Text>
          <Text style={{ marginBottom: '0.5em' }}>+1bn downloads in Android</Text>
        </Slide>

        <Slide bgColor="dark">
          <Heading style={{ marginBottom: '1em' }}>Reality</Heading>
          <Text style={{ color: 'white', marginBottom: '0.5em' }}>Slow innovation</Text>
          <Text style={{ color: 'white', marginBottom: '0.5em' }}>Value proposition didn't evolve</Text>
        </Slide>

        <Slide>
          <Heading margin="0 0 .3em">Reinventing Skype</Heading>
          <Layout>
            <Fill>
              <Image src={images.clients} />
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="dark">
          <BlockQuote>
            <Quote>Everyone seems to hate the new Skype</Quote>
            <Cite>Tom Warren | The Verge</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="dark">
          <Heading style={{ marginBottom: '1em' }}>React to feedback quickly</Heading>
          <Text style={ { color: 'white', marginBottom: '0.6em' } }>From 1 to 4 🌟 </Text>
          <Text style={ { color: 'white' } }>Featured in Google Play again</Text>
        </Slide>

        <Slide bgColor="dark">
          <BlockQuote>
            <Quote>I can tell you that it is not as bad as you would think</Quote>
            <Cite>Brad Sams | thurrot.com</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage={images.xp}>
          <Heading>
            <Layout style={{ justifyContent: 'center', marginTop: '1.2em' }}>
              <Fit>
                <Text textColor="primary" textSize="1.5em">
                  React
                </Text>
              </Fit>
              <Fit>
                <Text textColor="red" textSize=".7em">
                  XP
                </Text>
              </Fit>
            </Layout>
          </Heading>
          <Text style={ { color: 'white' } }>https://github.com/Microsoft/reactxp</Text>
        </Slide>

        <Slide bgColor="dark">
          <Layout>
            <Fill>
              <Bubble>ReactXP</Bubble>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Bubble textSize="2.5rem" backgroundColor={ "#3C9ED3" }>React for Web</Bubble>
            </Fill>
            <Fill>
              <Bubble textSize="2.5rem" backgroundColor={ "#3C9ED3" }>React Native</Bubble>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Bubble textSize="2rem" backgroundColor={ "#4BA8D0" }>Browser DOM</Bubble>
            </Fill>
            <Fill>
              <Bubble textSize="2rem" backgroundColor={ "#4BA8D0" }>Native Views</Bubble>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Layout>
                <Fill>
                  <Bubble textSize=".95rem" backgroundColor={ "#6BBCCB" }>Web Browser</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".95rem" backgroundColor={ "#6BBCCB" }>Desktop - Electron</Bubble>
                </Fill>
              </Layout>
            </Fill>
            <Fill>
              <Layout>
                <Fill>
                  <Bubble textSize=".9rem" backgroundColor={ "#6BBCCB" }>iOS</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".9rem" backgroundColor={ "#6BBCCB" }>Android</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".9rem" backgroundColor={ "#6BBCCB" }>UWP</Bubble>
                </Fill>
              </Layout>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Layout>
                <Fill>
                  <Bubble textSize=".9rem" backgroundColor={ "rgb(143, 211, 197)" }>Windows</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".9rem" backgroundColor={ "rgb(143, 211, 197)" }>Mac</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".9rem" backgroundColor={ "rgb(143, 211, 197)" }>Linux</Bubble>
                </Fill>
              </Layout>
            </Fill>
            <Fill>
              <Layout>
                <Fill>
                </Fill>
              </Layout>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="dark">
          <Heading textSize={'2em'}>Team organization</Heading>
          <Text style={{ color: 'white', marginTop: '0.5em' }}>From platform based to customer value based.</Text>
        </Slide>

        <Slide bgColor="dark">
          <Heading textSize={'2em'}>Challenges</Heading>

          <List>
            <ListItem>Changing our developers stack</ListItem>
            <ListItem>Performance, specially at startup.</ListItem>
            <ListItem>Betting on a inmature platform.</ListItem>
            <ListItem>Accessibility APIs are limited</ListItem>
          </List>
        </Slide>

        <Slide bgColor="dark">
          <Heading textSize={'2em'}>Where are we?</Heading>
          <List>
            <ListItem>We ship every 2 weeks across all platforms</ListItem>
            <ListItem>More than 90% of our code is shared.</ListItem>
            <ListItem>We respond to feedback from users at a much faster pace</ListItem>
            <ListItem>
              We are able to innovate and experiment faster.
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Thank you!</Heading>
          <Text style={ { marginTop: '20px' } }>{ 'Questions?' }</Text>
        </Slide>
      </Deck>
    );
  }
}
