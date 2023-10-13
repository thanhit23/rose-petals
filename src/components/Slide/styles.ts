const boxRootSlideShow = {
  backgroundColor: ' #F6F9FC',
  marginBottom: '60px',
};

const containerBoxSlide = {
  paddingTop: '32px',
  paddingBottom: '32px',
};

const boxSlide = {
  '& > div > ul > .indicator.active > div::after': {
    width: '9px',
    height: '9px',
    top: '50%',
    left: '50%',
    content: '" "',
    borderRadius: '300px',
    position: 'absolute',
    transform: 'translate(-50%, -50%) scaleX(1)',
    backgroundColor: '#0F3460',
  },
};

const boxDot = {
  width: '16px',
  height: '16px',
  borderRadius: '300px',
  margin: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  border: '1px solid #0F3460',
};

export default {
  containerBoxSlide,
  boxRootSlideShow,
  boxSlide,
  boxDot,
};
