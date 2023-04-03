import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type Props = {
  id: string;
  stopColorOne: string;
  stopColorTwo: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  direction?: 'horizontal' | 'vertical';
  className?: string;
  sx?: any;
};

export const GradientIcon = ({
  id,
  stopColorOne,
  stopColorTwo,
  Icon,
  direction,
  className,
  sx
}: Props) => (
  <>
    <svg width={0} height={0}>
      <linearGradient
        id={id}
        x1={direction === 'horizontal' ? 0 : 1}
        y1={direction === 'horizontal' ? 1 : 0}
        x2={direction === 'horizontal' ? 1 : 1}
        y2={direction === 'horizontal' ? 1 : 1}
      >
        <stop offset={0} stopColor={stopColorOne} />
        <stop offset={1} stopColor={stopColorTwo} />
      </linearGradient>
    </svg>
    <Icon sx={{ fill: `url(#${id})`, ...sx }} className={className} />
  </>
);

export default GradientIcon;
