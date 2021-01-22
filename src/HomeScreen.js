import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Container, ListItem, CheckBox, Body, Right} from 'native-base';
import Animated from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import {Card} from './Parts/card';
import {Empty} from './Parts/empty';
import {deleteTransactions} from './store/actions/transactionAction';
import Swipeout from 'react-native-swipeout';

function Item({title, id, price}) {
  let swipeBtns = [
    {
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => {
        dispatch(deleteTransactions(id));
      },
    },
  ];
  const dispatch = useDispatch();
  return (
    <View style={{paddingHorizontal: 30, paddingVertical: 15}}>
      <Swipeout
        right={swipeBtns}
        autoClose="true"
        backgroundColor="transparent">
        <ListItem>
          <Body>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
                marginLeft: 10,
                fontFamily: 'Lato-Regular',
                color: '#3B3B98',
              }}>
              {title}
            </Text>
          </Body>
          <Right>
            <Text
              style={{
                fontFamily: 'Lato-Bold',
                fontSize: 14,
                fontWeight: '400',
                color: price > 0 ? '#4cd137' : '#FF4500',
              }}>
              {price > 0 ? `₹${price}` : `-₹${Math.abs(price)}`}
            </Text>
          </Right>
        </ListItem>
      </Swipeout>
    </View>
  );
}

export const HomeScreen = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);

  return (
    <Container>
      <Animated.View
        style={{
          alignItems: 'center',
          paddingTop: 10,
          paddingHorizontal: 20,
        }}>
        <Card navigation={navigation} />
        <Text
          style={{
            fontSize: 12,
            color: '#A9A9A9',
            paddingHorizontal: 25,
            paddingTop: 10,
          }}>
          Swipe left on a transaction to delete.
        </Text>
      </Animated.View>
      <View style={{flex: 1}}>
        {transactions.length > 0 ? (
          <FlatList
            data={transactions}
            renderItem={({item}) => (
              <Item title={item.title} price={item.price} id={item.id} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Empty />
        )}
      </View>
    </Container>
  );
};

export default HomeScreen;
