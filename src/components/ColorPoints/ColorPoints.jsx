import { Box } from '@mui/material';

const ColorPoint = ({ color, width = 16, height = 16 }) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        borderRadius: '50%',
        backgroundColor: color,
        display: 'inline-block',
        marginRight: 1,
      }}
    />
  );
};

export default ColorPoint;
