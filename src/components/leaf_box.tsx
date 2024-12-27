import { LEAF_START, LEAF_HEIGHT } from '@/constants/size';
import { useEffect, useState } from 'react';
import { Leaves } from '@/constants/leaves';
import { LeafType } from '@/models/leaf.model';

interface props {
  type?: LeafType;
}

export default function LeafBox({ type = LeafType.CHARA_LEAF }: props) {
  const leaf = Leaves.find((leaf) => leaf.getType() === type);
  const [bgPositionY, setBgPositionY] = useState(LEAF_START);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / docHeight;
      const distance = scrollPercentage * LEAF_HEIGHT;
      setBgPositionY(LEAF_START + distance); // increase from LEAF_START to distance
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leafStyle = 'z-10 size-full absolute bg-repeat-y bg-fixed bg-auto xl:bg-contain';

  return (
    <>
      <div
        className={`${leafStyle} bg-left sm:bg-center`}
        style={{
          backgroundPositionY: `${bgPositionY}px`,
          backgroundImage: `url('${leaf?.getLeaf1Url()}')`
        }}
      />
      <div
        className={`${leafStyle} bg-left sm:bg-center`}
        style={{
          backgroundPositionY: `${bgPositionY / 2}px`,
          backgroundImage: `url('${leaf?.getLeaf2Url()}')`
        }}
      />
      <div
        className={`${leafStyle} bg-right sm:bg-center`}
        style={{
          backgroundPositionY: `${bgPositionY / 3}px`,
          backgroundImage: `url('${leaf?.getLeaf3Url()}')`
        }}
      />
    </>
  );
}
