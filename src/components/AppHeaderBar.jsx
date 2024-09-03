import React from 'react';
// import { Platform } from 'react-native';
import { Appbar, Text} from 'react-native-paper';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Header = ({ options, route, navigation }) => {
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : route.name;


  return (
    <Appbar.Header>
        <Appbar.Content
            title={ title }
        />

        {
          title == "Cart"? (
            <Text
                variant="titleMedium" 
                style={{ 
                  padding: 10,
                  fontSize: 14
                }}
            >
                Somthing
            </Text>
          ) : ("")
        }
       

    </Appbar.Header>
  );
};

export default Header;
