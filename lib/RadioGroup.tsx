import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import RadioButton from './RadioButton';
import { RadioButtonProps, RadioGroupProps } from './types';

export default function RadioGroup({ containerStyle, layout = 'column', onPress, radioButtons, selectedId }: RadioGroupProps) {

  function handlePress(id: string) {
    if(id === selectedId) return;
    if(onPress)
      onPress(id);
  }

  return (
    <View style={[styles.container, { flexDirection: layout }, containerStyle]}>
      {radioButtons.map((button) => (
        <RadioButton
          {...button}
          key={button.id}
          selected={button.id === selectedId}
          onPress={() => handlePress(button.id)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});
