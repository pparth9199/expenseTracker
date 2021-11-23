import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTransaction} from './store/actions/transactionAction';
import {
  Button,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
} from 'native-base';
function AddTransaction({navigation}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  function onSubmit(title, price) {
    if (!title || !price) {
      return alert('Please fill all details.');
    }
    const id = Math.floor(Math.random() * 400000);

    const newTransaction = {
      id,
      title,
      price: +price,
    };
    dispatch(addTransaction({...newTransaction}));
    navigation.navigate('Home');
  }
  return (
    <Container>
      <Content>
        <Form>
          <Item style={styles.item}>
            <Input
              placeholder="Where did you earn?"
              onChangeText={(title) => setTitle(title)}
            />
          </Item>
          <Item style={styles.item}>
            <Input
              placeholder="How much did you earn?"
              keyboardType="number-pad"
              onChangeText={(price) => setPrice(price)}
            />
          </Item>
        </Form>
        <View style={{alignItems: 'center'}}>
          <Button
            rounded
            light
            style={{
              alignSelf: 'center',
              paddig: 10,
              marginTop: 20,
              backgroundColor: '#778beb',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              onSubmit(title, price);
            }}>
            <Text
              style={{
                fontSize: 17,
                padding: 20,
                color: '#fff',
                
                fontWeight: '700',
              }}>
              Add Transaction
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 20,
  },
});
export default AddTransaction;
