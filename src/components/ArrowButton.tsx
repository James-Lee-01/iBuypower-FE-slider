import Arrow from "../../public/images/arrow.svg"

interface ArrowButtonProps {
  direction: 'left' | 'right';
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction }) => {
  const isLeftDirection = direction === 'left';
  const arrowRotation = isLeftDirection ? '-rotate-90' : 'rotate-90';
  const arrowClassName = isLeftDirection ? 'left-arrow' : 'right-arrow';

  return (
    <button
      className={`arrow-button-${direction} bg-none shadow-[0_0_6px_#00000029] w-8 md:w-9 lg:w-11 h-8 md:h-9 lg:h-11`}
    >
      <Arrow
        className={`${arrowClassName} ${arrowRotation} p-3 hover:text-white hover:bg-black w-8 md:w-9 lg:w-11 h-8 md:h-9 lg:h-11`}
        width={45}
        height={45}
      />
    </button>
  );
};

export default ArrowButton;