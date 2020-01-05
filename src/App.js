import {Body, Container, Header, Title} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';

import React from 'react';
import {StyleSheet} from 'react-native';

const App = () => (
  <Container>
    <Header>
      <Body>
        <Title>Header</Title>
      </Body>
    </Header>
    <Grid>
      <Col style={styles.bg1} />
      <Col style={styles.bg2} />
    </Grid>
  </Container>
);

export default App;

const styles = StyleSheet.create({
  bg1: {
    backgroundColor: '#635DB7',
  },
  bg2: {
    backgroundColor: '#00CE9F',
  },
});
