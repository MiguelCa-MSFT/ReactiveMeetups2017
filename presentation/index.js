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
      background: 'linear-gradient(90deg, rgb(22, 134, 217), rgb(143, 211, 197));',
      borderRadius: 5,
      color: 'white',
      padding: 10,
    },
  },
};

const Bubble = ({ textSize, children, withoutMargin }) => (
  <Text textSize={textSize} style={style.bubble.blue} margin={!withoutMargin ? 10 : 0}>
    {children}
  </Text>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['fade']} bgColor="skype">
          <Layout style={{ flexDirection: 'column' }}>
            <Fill style={{ paddingBottom: '4.5em' }}>
              <Heading textColor="primary" textAlign="left">
                Hello,
              </Heading>
              <Heading textColor="primary" textAlign="left">
                I'm Peter
              </Heading>
            </Fill>

            <Fit style={{ paddingBottom: '2em' }}>
              <Text textColor="primary" textAlign="left" textSize={'1.5rem'}>
                Peter Lisy
              </Text>
              <Text textColor="primary" textAlign="left" textSize={'1.5rem'}>
                Software Engineer
              </Text>
              <Text textColor="primary" textAlign="left" textSize={'1.5rem'}>
                Microsoft | Skype
              </Text>
            </Fit>

            <Fit>
              <Layout>
                <Fill>
                  <Text textColor="primary" textAlign="left" textSize={'1.5rem'}>
                    Twitter: @PetoLisy
                  </Text>
                </Fill>
                <Fill>
                  <Text textColor="primary" textAlign="left" textSize={'1.5rem'}>
                    Skype: peto.lisy
                  </Text>
                </Fill>
              </Layout>
            </Fit>
          </Layout>
        </Slide>

        <Slide bgImage={images.sqiglyBg}>
          <CodePane lang="jsx" source="// TODO: Ship new clients" textSize="3rem" />
        </Slide>

        <Slide bgColor="dark">
          <BlockQuote>
            <Quote>Everyone seems to hate the new Skype</Quote>
            <Cite>Tom Warren | The Verge</Cite>
          </BlockQuote>
          <Notes>Ship we did. And everybody hated it.</Notes>
        </Slide>

        <Slide bgColor="dark">
          <BlockQuote>
            <Quote>I can tell you that it is not as bad as you would think</Quote>
            <Cite>Brad Sams | thurrot.com</Cite>
          </BlockQuote>
          <Notes>Not all hope was lost though.</Notes>
        </Slide>

        <Slide bgColor="dark" textColor="primary">
          <Heading>Plan for today</Heading>
          <List>
            <ListItem>Little history</ListItem>
            <ListItem>Some React code</ListItem>
            <ListItem>Skype front end tech stack</ListItem>
            <ListItem>Some more React code</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Little bit of history</Heading>
          <Text>Skype - firts release 14 years ago</Text>
          <Text>All major platforms - native clients</Text>
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

        <Slide bgColor="dark">
          <ComponentPlayground
            theme="light"
            code={require('raw-loader!../assets/sample-react.example')}
          />
        </Slide>

        <Slide bgColor="dark">
          <ComponentPlayground
            theme="light"
            code={require('raw-loader!../assets/sample-react-state.example')}
          />
        </Slide>

        <Slide bgColor="dark" textColor="priamry">
          <Heading>React Native</Heading>
          <List textColor="primary">
            <ListItem>Use tools you know and love to build UIs using native components</ListItem>
            <ListItem>Async rendering</ListItem>
            <ListItem>Same knowledge applies. (mostly, but not enough)</ListItem>
            <ListItem>NOT a mobile web app or HTML 5 app or hybrid app</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Skype architecture</Heading>
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
        </Slide>

        <Slide bgColor="dark">
          <Layout>
            <Fill>
              <Bubble>ReactXP</Bubble>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Bubble>React for Web</Bubble>
            </Fill>
            <Fill>
              <Bubble>React Native</Bubble>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Bubble>Browser DOM</Bubble>
            </Fill>
            <Fill>
              <Bubble>Native Views</Bubble>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Layout>
                <Fill>
                  <Bubble textSize=".95rem">Web Browser</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".95rem">Desktop - Electron</Bubble>
                </Fill>
              </Layout>
            </Fill>
            <Fill>
              <Layout>
                <Fill>
                  <Bubble textSize=".95rem">Web Browser</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".95rem">Desktop - Electron</Bubble>
                </Fill>
              </Layout>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Layout>
                <Fill>
                  <Bubble textSize=".9rem">Windows</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".9rem">Mac</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".9rem">Linux</Bubble>
                </Fill>
              </Layout>
            </Fill>
            <Fill>
              <Layout>
                <Fill>
                  <Bubble textSize=".9rem">iOS</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".9rem">Android</Bubble>
                </Fill>
                <Fill>
                  <Bubble textSize=".9rem">Windows (UWP)(?)</Bubble>
                </Fill>
              </Layout>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="dark">
          <CodePane lang="jsx" theme="light" source={require('raw-loader!../assets/reactxp-sample.1.example')} />
        </Slide>
        <Slide bgColor="dark">
          <CodePane lang="jsx" theme="light" source={require('raw-loader!../assets/reactxp-sample.2.example')} />
        </Slide>
        <Slide bgColor="dark">
          <CodePane lang="jsx" theme="light" source={require('raw-loader!../assets/reactxp-sample.3.example')} />
        </Slide>

        <Slide>
          <Text>The app runs on a variety of devices</Text>
          <Image src={images.responsivness} />
        </Slide>

        <Slide bgColor="dark">
          <CodePane
            lang="jsx"
            theme="light"
            source={require('raw-loader!../assets/reactxp-sample.navigation.1.example')}
          />
        </Slide>
        <Slide bgColor="dark">
          <CodePane
            lang="jsx"
            theme="light"
            source={require('raw-loader!../assets/reactxp-sample.navigation.2.example')}
          />
        </Slide>
        <Slide bgColor="dark">
          <CodePane
            lang="jsx"
            theme="light"
            source={require('raw-loader!../assets/reactxp-sample.navigation.3.example')}
          />
        </Slide>

        <Slide>
          <Heading textSize={'2em'}>ReactXP Extensions</Heading>

          <List>
            <ListItem>Way to bring in platform specific modules and native code</ListItem>
            <ListItem>
              20+ built at skype, some already open source (VirtualListView, Video, …)
            </ListItem>
            <ListItem>Need to keep the same interface across platforms</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading textSize={'2em'}>ReactXP Limitations</Heading>

          <List>
            <ListItem>Interactive components – Sync rendering</ListItem>
            <ListItem>Native like start up times</ListItem>
            <ListItem>Share extension and other low memory scenarios</ListItem>
            <ListItem>Accessibility APIs (existing, but have limitations)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading textSize={'2em'}>ReSub</Heading>

          <List>
            <ListItem>Re(act)Sub(scriptions)</ListItem>
            <ListItem>State management library</ListItem>
            <ListItem>Open source library</ListItem>
          </List>
        </Slide>

        <Slide bgColor="dark">
          <CodePane lang="jsx" theme="light" source={require('raw-loader!../assets/resub-sample.1.example')} />
        </Slide>

        <Slide bgColor="dark">
          <CodePane lang="jsx" theme="light" source={require('raw-loader!../assets/resub-sample.2.example')} />
        </Slide>

        <Slide bgColor="dark">
          <CodePane lang="jsx" theme="light" source={require('raw-loader!../assets/resub-sample.3.example')} />
        </Slide>

        <Slide>
          <Heading>Where are we?</Heading>
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
