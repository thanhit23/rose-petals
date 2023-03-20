const active = {
  backgroundColor: '#d23f57',
  color: '#fff',
};

const unActive = {
  color: '#d23f57',
  backgroundColor: '#fce9ec',
};

const chipItem = {
  padding: '0.5rem 1rem',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
  margin: '4px 0px',
  fontFamily:
    '"Open Sans", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  '&:hover': {
    backgroundColor: '#d23f57',
    color: '#fff',
  },
};

const bridge = {
  width: '50px',
  height: '4px',
  backgroundColor: 'rgb(252, 233, 236)',
};

export default {
  chipItem,
  unActive,
  active,
  bridge,
};
