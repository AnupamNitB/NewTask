import React, {memo} from 'react';
import {Card, CardItem, Text, Body} from 'native-base';
import {StyleSheet} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const PostCard = (json) => {
  const {title, url, created_at, author} = json;
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('JsonDetails', {json})}>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.label}>
              Title: <Text style={styles.value}>{title}</Text>
            </Text>
            <Text style={styles.label}>
              URL: <Text style={styles.value}>{url}</Text>
            </Text>
            <Text style={styles.label}>
              Created At: <Text style={styles.value}>{created_at}</Text>
            </Text>
            <Text style={styles.label}>
              Author: <Text style={styles.value}>{author}</Text>
            </Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default memo(PostCard);

const styles = StyleSheet.create({
  card: {borderRadius: 10, paddingVertical: 7, marginTop: '2%'},

  value: {
    fontWeight: 'bold',
  },
  label: {
    marginTop: '1%',
  },
});
