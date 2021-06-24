import React, {useState, useEffect} from 'react';
import {Button, TextInput, FlatList, View, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {addItem, deleteItem} from '../store/actions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const [item, setItem] = useState('');

  const {todo} = useSelector(({HomeReducer}) => HomeReducer);
  console.log(todo);

  useEffect(() => {}, []);

  const onChange = text => {
    setItem(text);
  };

  const onClick = () => {
    dispatch(addItem(item));
    setItem('');
  };

  const onDelete = _id => {
    dispatch(deleteItem(_id));
  };

  return (
    <View style={{flex: 1, marginTop: 50}}>
      <View style={{flex: 1, flexDirection: 'row', margin: 5}}>
        <TextInput
          style={{borderWidth: 1, height: 50, width: '80%'}}
          type="text"
          value={item}
          onChangeText={onChange}
        />
        <Button disabled={item == ''} title="Add" onPress={onClick} />
      </View>
      <FlatList
        contentContainerStyle={{flex: 1}}
        data={todo}
        keyExtractor={item => item?.todo}
        renderItem={(item, index) => (
          //   console.log(item)
          <View style={{flexDirection: 'row', height: 80}} key={index}>
            <Text style={{flex: 1, alignSelf: 'center'}}>{item.item}</Text>
            <Button
              style={{flex: 1, alignSelf: 'center'}}
              title="delete"
              onPress={() => onDelete(item._id)}></Button>
          </View>
        )}
      />
    </View>
  );
}
