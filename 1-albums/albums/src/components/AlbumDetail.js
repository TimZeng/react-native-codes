import React from 'react';
import { View, Text } from 'react-native';

import Card from './Card';

const AlbumDetail = ({ album }) => (
    <Card>
      <Text>{album.title}</Text>
    </Card>
  );

export default AlbumDetail;
