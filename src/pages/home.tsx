import Character from '@/components/character';
import Cover from '@/components/cover';
import Footer from '@/components/footer';
import Intro from '@/components/intro';
import Movie from '@/components/movie';
import Navbar from '@/components/navbar';
import Story from '@/components/story';
import { createRef, useEffect, useState } from 'react';
import Loading from '@/components/loading';
import { Backdrop } from '@mui/material';
import { IMAGES, anemoi_logo_anime1, anemoi_logo_anime2 } from '@/constants/images';
import { WIDTH_MIN } from '@/constants/size';
import FontFaceObserver from 'fontfaceobserver';

export default function Home() {
  const sections = ['top', 'introduction', 'story', 'character', 'movie'];
  const refs: React.RefObject<HTMLDivElement>[] = sections.map(() => createRef());

  const [loadingResourcesComplete, setLoadingResourcesComplete] = useState(false);
  const [loadingBackdropComplete, setLoadingBackdropComplete] = useState(false);
  const [loadingTimeout, setLoadingTimeout] = useState(false);
  const loadingMinDuration = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingTimeout(true);
    }, loadingMinDuration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadImages = (sources: string[]) => {
      return Promise.all(
        sources.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
          });
        })
      );
    };

    const loadFonts = () => {
      const fontTheSeasons = new FontFaceObserver('the-seasons');
      const fontTsukumin = new FontFaceObserver('tsukumin');
      const fontThomasita = new FontFaceObserver('thomasita');
      const fontMongolia = new FontFaceObserver('mongolia');
      const fontVoyage = new FontFaceObserver('voyage');
      return Promise.all([
        fontTheSeasons.load(),
        fontTsukumin.load(),
        fontThomasita.load(),
        fontMongolia.load(),
        fontVoyage.load()
      ]);
    };

    const loadLogo = async () => {
      await Promise.all([loadImages([anemoi_logo_anime1, anemoi_logo_anime2])]);
      setLoadingBackdropComplete(true);
    };

    const loadResources = async () => {
      await Promise.all([loadFonts(), loadImages(IMAGES)]);
      setLoadingResourcesComplete(true);
    };

    loadLogo();
    loadResources();
  }, []);

  return (
    <div onDragStart={(e) => e.preventDefault()}>
      {loadingBackdropComplete && (
        <Backdrop
          sx={{ backgroundColor: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!loadingResourcesComplete || !loadingTimeout}
          transitionDuration={1000}>
          <Loading />
        </Backdrop>
      )}

      {loadingResourcesComplete && loadingTimeout && (
        <div style={{ minWidth: WIDTH_MIN }}>
          <div className="w-fit fixed z-[99]">
            <Navbar sections={sections} refs={refs} />
          </div>
          <div ref={refs[0]}>
            <Cover />
          </div>
          <div ref={refs[1]}>
            <Intro />
          </div>
          <div ref={refs[2]}>
            <Story />
          </div>
          <div ref={refs[3]}>
            <Character />
          </div>
          <div ref={refs[4]}>
            <Movie />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
