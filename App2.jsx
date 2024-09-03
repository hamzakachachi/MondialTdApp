import * as React from 'react';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#006FFD',  // Primary color (from Highlight)
    accent: '#3AC0A0',   // Accent color (from Success)
    background: '#F8F9FE',  // Background color (from Neutral Light)
    surface: '#FFFFFF',     // Surface color (from Neutral Light)
    text: '#1F2024',        // Text color (from Neutral Dark)
    error: '#ED3241',       // Error color (from Error)
    success: '#298267',     // Success color (from Success)
    warning: '#E86339',     // Warning color (from Warning)
    onSurface: '#494A50',   // Surface text color (from Neutral Dark)
    disabled: '#8F9098',    // Disabled color (from Neutral Dark)
    placeholder: '#71727A', // Placeholder color (from Neutral Dark)
  },
  roundness: 6,
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
  textStyles: {
    h1: {
      fontFamily: 'Inter-Black',
      fontSize: 24,
    },
    h2: {
      fontFamily: 'Inter-Black',
      fontSize: 18,
    },
    h3: {
      fontFamily: 'Inter-Black',
      fontSize: 16,
    },
    h4: {
      fontFamily: 'Inter-ExtraBold',
      fontSize: 14,
    },
    h5: {
      fontFamily: 'Inter-Bold',
      fontSize: 12,
    },
    bodyXL: {
      fontFamily: 'Inter-Regular',
      fontSize: 18,
    },
    bodyL: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
    },
    bodyM: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
    },
    bodyS: {
      fontFamily: 'Inter-Regular',
      fontSize: 12,
    },
    bodyXS: {
      fontFamily: 'Inter-Medium',
      fontSize: 10,
    },
    actionL: {
      fontFamily: 'Inter-SemiBold',
      fontSize: 14,
    },
    actionM: {
      fontFamily: 'Inter-SemiBold',
      fontSize: 12,
    },
    actionS: {
      fontFamily: 'Inter-SemiBold',
      fontSize: 10,
    },
    caption: {
      fontFamily: 'Inter-SemiBold',
      fontSize: 10,
    },
  },
};

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <Provider store={store}>
        <Main />
      </Provider>
    </PaperProvider>
  );
}
