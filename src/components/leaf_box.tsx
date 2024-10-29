import { LEAF_HEIGHT } from '@/constants/size';
import { useEffect, useState } from 'react';
import { Leaves } from '@/constants/leaves';
import { LeafType } from '@/models/leaf.model';

interface props {
  type?: LeafType;
}

export default function LeafBox({ type = LeafType.CHARA_LEAF }: props) {
  const leaf = Leaves.find((leaf) => leaf.type === type);
  const [bgPositionY, setBgPositionY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / docHeight;
      const newPositionY = scrollPercentage * LEAF_HEIGHT; // increase from 0 to LEAF_HEIGHT
      setBgPositionY(newPositionY);
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
        className={`${leafStyle} bg-left`}
        style={{
          backgroundPositionY: `${bgPositionY}px`,
          backgroundImage: `url('${leaf?.leaf1_url}')`
        }}
      />
      <div
        className={`${leafStyle} bg-center`}
        style={{
          backgroundPositionY: `${bgPositionY / 2}px`,
          backgroundImage: `url('${leaf?.leaf2_url}')`
        }}
      />
      <div
        className={`${leafStyle} bg-right`}
        style={{
          backgroundPositionY: `${bgPositionY / 3}px`,
          backgroundImage: `url('${leaf?.leaf3_url}')`
        }}
      />
    </>
  );
}
