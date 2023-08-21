const commonStyle = {
  display: 'flex',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  // backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  // padding: '1rem',
  cursor: 'pointer',
};

const baseStyle = {
  position: 'relative',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  padding: '1rem',
  ...commonStyle,
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const closeIconHoverStyle = {
  transition: 'all 0.5s',
  '&:hover': {
    backgroundColor: '#f64747',
    color: '#fff',
  }
}

export { commonStyle, baseStyle, focusedStyle, acceptStyle, rejectStyle, closeIconHoverStyle };
