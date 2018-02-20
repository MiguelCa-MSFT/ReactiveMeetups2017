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
              <Heading textColor="primary" textAlign="left">
                Refactor(
              </Heading>
              <Heading textColor="primary" textAlign="left" style={ { whiteSpace: "pre-wrap" } }>
                { "   this.skype" }
              </Heading>
              <Heading textColor="primary" textAlign="left">
                )
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
          <Heading style={{ marginBottom: '1em' }}>Little bit of history</Heading>
          <Text>Skype first releases 14 years ago</Text>
          <Text>All platforms are native clients</Text>
          <Notes>
            First Skype client was released approximately 14 years ago. Since then skype was
            introduced to a number of platforms ranging from desktops, mobile phones, hololens, to
            TVs and cars. To achieve the best user experience, each of these clients was built using
            native tools – Objective C, Java, Delphi, C#, JavaScript and more. Now imagine all these
            teams trying to ship a consistent feature set across all the platforms at roughly the
            same time. Each of them having their own backlog, bugs and features they’d like to give
            to their users, their own release cycle. Shipping one feature across all the clients at
            the same time proved to be challenging to say the least.
          </Notes>
        </Slide>

        <Slide>
          <Heading margin="0 0 .3em">Reinventing Skype</Heading>
          <Layout>
            <Fill>
              <Image src={images.clients} />
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading textSize={ 40 }>Skype Client Architecture</Heading>
          <Image src={images.architecture} />
          <Notes>
            We decided to bet on one client codebase. Building UI bits in a cross platform way isn’t
            enough. You need a way to access data, communicate with external world, your device
            sensors, network, data persistence with different features provided by native options on
            each platform. We’ve built libraries for most of those tasks. We’ve build a library to
            deal with UI in a cross platform way. We have stores built using ReSub for in memory
            state management. We have modules we call services that are responsibe for talking with
            the outside world regardless of whether it’s sensors, time, microservices. We have a
            Simple REST client library for network communication and a nosql abstraction over
            indexdb and SQLite for data persistence. We have a way to bring in native modules with
            single interface so on app level we don’t have to make a difference.
          </Notes>
        </Slide>

        <Slide bgColor="dark" textColor="primary">
          <Heading>React</Heading>
          <List textColor="primary">
            <ListItem>Component-Based</ListItem>
            <ListItem>The Virtual DOM</ListItem>
            <ListItem>JSX syntax</ListItem>
          </List>
        </Slide>

        <Slide bgColor="dark">
          <iframe src="https://codesandbox.io/embed/j1jzno4ly3?fontsize=12" style={ style.iframe} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
        </Slide>

        <Slide bgColor="dark" textColor="primary">
          <Heading>React Native</Heading>
          <List textColor="primary">
            <ListItem>Same tools and frameworks</ListItem>
            <ListItem>Same layout engine</ListItem>
            <ListItem>A true native app</ListItem>
          </List>
        </Slide>

        <Slide bgColor="dark" textColor="primary">
          <iframe style={ style.iframe } src="https://snack.expo.io/H1D11bEHf" width="1000" height="700" />
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
          <iframe style={ style.iframe } src="https://codesandbox.io/embed/6j25y256yn?fontsize=12" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
        </Slide>

        <Slide>
          <Text>The app runs on a variety of devices</Text>
          <Image src={images.responsivness} />
        </Slide>

        <Slide bgColor="dark">
          <Heading textSize={'2em'}>ReactXP Extensions</Heading>

          <List>
            <ListItem>A way to bring in platform specific modules and native code</ListItem>
            <ListItem>
              20+ built at skype, some already open source (VirtualListView, Video, …)
            </ListItem>
            <ListItem>Need to keep the same interface across platforms</ListItem>
          </List>
        </Slide>

        <Slide bgColor="dark">
          <Heading textSize={'2em'}>ReactXP Limitations</Heading>

          <List>
            <ListItem>Asynchronous rendering bring issues in specific scenarios like list views</ListItem>
            <ListItem>Slow startup times</ListItem>
            <ListItem>Share extension and other low memory scenarios</ListItem>
            <ListItem>Accessibility APIs are limited</ListItem>
          </List>
        </Slide>

        <Slide bgColor="dark">
          <Heading textSize={'2em'}>ReSub</Heading>
          <Text style={ { color: 'white' } }>https://github.com/Microsoft/ReSub</Text>
          <List>
            <ListItem>Re(act) Sub(scriptions)</ListItem>
            <ListItem>State management library</ListItem>
            <ListItem>Open source library</ListItem>
          </List>
        </Slide>

        <Slide bgColor="dark">
          <iframe src="https://codesandbox.io/embed/4xo5yk5mm0?fontsize=12&hidenavigation=1" style={ style.iframe } sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
        </Slide>

        <Slide bgColor="dark">
          <Heading textSize={'2em'}>Where are we?</Heading>
          <List>
            <ListItem>We ship every 2 weeks across all platforms</ListItem>
            <ListItem>More than 90% of our code is shared</ListItem>
            <ListItem>We respond to feedback from users at a much faster pace</ListItem>
            <ListItem>
              We have many more great things to ship and feel much more agile/faster with ReactXP in
              place.
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Thank you!</Heading>
        </Slide>
      </Deck>
    );
  }
}
