const Form = {
  baseStyle: {
    container: {
      label: {
        color: 'blue.400',
        fontSize: { base: '12px', md: '14px' },
      },
      input: {
        height: '35px',
        backgroundColor: 'white.100',
        color: 'blue.400',
        fontSize: { base: '12px', md: '14px' },
        _placeholder: {
          color: 'grey.800',
          fontSize: { base: '12px', md: '14px' },
        },
        _disabled: {
          backgroundColor: 'white.300',
        },
      },
      select: {
        height: '35px',
        backgroundColor: 'white.100',
        color: 'blue.400',
        fontSize: { base: '12px', md: '14px' },
        _disabled: {
          backgroundColor: 'white.300',
        },
      },
      textarea: {
        backgroundColor: 'white.100',
        borderRadius: '6px',
        color: 'blue.400',
        _placeholder: {
          color: 'grey.800',
          fontSize: { base: '12px', md: '14px' },
        },
        _disabled: {
          backgroundColor: 'white.300',
        },
      },
    },
  },
};

export default Form;
