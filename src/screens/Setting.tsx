/* eslint-disable prettier/prettier */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  FormControl,
  Select,
  HStack,
  Text,
  Container,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';

export const Settings = props => {
  const {t, i18n} = useTranslation();
  const [value, setValue] = React.useState('en');
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>{t('langSelector')}</FormControl.Label>
        <Select
          selectedValue={value}
          minWidth={200}
          accessibilityLabel="change the language"
          placeholder="change the language"
          onValueChange={itemValue => {
            setValue(itemValue);
            i18n.changeLanguage(itemValue);
          }}
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size={5} />,
          }}
          mt={1}>
          <Select.Item label="English" value="en" />
          <Select.Item label="German" value="de" />
        </Select>
      </FormControl>
      <HStack mt={3} alignItems="baseline">
        <Text fontSize="md">{t('selectedLang')} </Text>
        <Text fontSize="md" bold>
          {value}
        </Text>
      </HStack>
    </Container>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Settings />
      </Center>
    </NativeBaseProvider>
  );
};
