import { useState, useEffect, useRef } from "react";
import ContainerMain from "../../Layouts/ContainerMain";
import ScreenContainer from "../../Layouts/ScreenContainer";
import debounce from "lodash.debounce";
import "./home.css";

const styles = {
  backgroundImage: `url("https://images.pexels.com/photos/3053017/pexels-photo-3053017.jpeg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Home() {
  return (
    <>
      <div
        style={styles}
        className="relative w-full h-screen flex justify-center"
      >
        <ContainerMain>
          <div className="absolute top-32 flex flex-col items-center px-8">
            <h1 className="font-display mt-10 sm:mt-20 text-6xl sm:text-9xl font-bold text-cyan-800">
              MyTinerary
            </h1>
            <p className="text-center sm:w-4/6 font-extrabold text-sm sm:text-3xl sm:mt-8 tracking-wide text-slate-700 sm:text-gray-300">
              Find your perfect trip, designed by insiders who know and love
              their cities
            </p>
          </div>
        </ContainerMain>
      </div>
      {/* <ScreenContainer classToAdd={"bg-cyan-800"}>
        <div className="flex flex-col sm:flex-row justify-between p-10">
          <div>
            <h3 className="font-display text-center sm:w-4/6 font-extrabold text-sm sm:text-3xl sm:mt-8 tracking-wide text-slate-700 sm:text-gray-300">
              Explore the World! adventure today!
            </h3>
            <p className="text-center sm:w-4/6 font-extrabold text-sm sm:text-3xl sm:mt-8 tracking-wide text-slate-700 sm:text-gray-300">
              Check out available cities and book your next
            </p>
          </div>
          <Carousel></Carousel>
        </div>
      </ScreenContainer> */}
      <ScreenContainer>
        <CarouselTwo></CarouselTwo>
      </ScreenContainer>
      <ScreenContainer>
        <CarouselFinal></CarouselFinal>
      </ScreenContainer>

      {/* <div style={styles} className="h-screen w-screen flex justify-center">
        <ContainerMain></ContainerMain>
      </div> */}
    </>
  );
}

const images = [
  // Coloca las URLs de tus imágenes aquí
  "https://images.pexels.com/photos/15109259/pexels-photo-15109259/free-photo-of-silhouetted-part-of-the-chureito-pagoda-and-mount-fuji-in-the-background-fujiyoshida-japan.jpeg",
  "https://images.pexels.com/photos/12910823/pexels-photo-12910823.jpeg",
  "https://images.pexels.com/photos/6294532/pexels-photo-6294532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/27428519/pexels-photo-27428519/free-photo-of-the-roman-colosseum-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/912897/pexels-photo-912897.jpeg",
  "https://images.pexels.com/photos/1929611/pexels-photo-1929611.jpeg",
  "https://images.pexels.com/photos/12238221/pexels-photo-12238221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/3290070/pexels-photo-3290070.jpeg",
  "https://images.pexels.com/photos/1682794/pexels-photo-1682794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/19283363/pexels-photo-19283363/free-photo-of-taxis-on-street-in-hong-kong.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/15009437/pexels-photo-15009437/free-photo-of-ferryboat-cruising-near-the-sydney-opera-house.jpeg",
];

const Carousel = () => {
  const [currentSection, setCurrentSection] = useState(0);

  // Divide las imágenes en secciones de 4
  const sections = [
    images.slice(0, 4),
    images.slice(4, 8),
    images.slice(8, 12),
  ];

  // // Cambiar sección automáticamente cada 4 segundos
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Se ejecuto carrousel");

  //     setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
  //   }, 4000); // Cambia cada 4 segundos

  //   // Limpia el intervalo cuando el componente se desmonta
  //   return () => clearInterval(interval);
  // }, [sections.length]);

  return (
    <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-4 gap-4 ">
      {sections[currentSection].map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className="h-full w-full object-cover"
        />
      ))}

      {/* <div className="carousel-controls">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              index === currentSection ? "active" : ""
            }`}
            onClick={() => setCurrentSection(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

const CarouselTwo = () => {
  const carouselRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [step, setStep] = useState(0);
  const [maxScrollAmount, setMaxScrollAmount] = useState(0);
  const [visibleWidth, setVisibleWidth] = useState(0);

  // Estados para la funcionalidad de arrastrar
  const isDragging = useRef(false);
  const startX = useRef(0);
  const initialScroll = useRef(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [itemWidth, setItemWidth] = useState(0);

  const text = (
    <div className="carousel-text hidden lg:flex justify-between p-10">
      <div>
        <h3 className="font-display text-center sm:w-4/6 font-extrabold text-sm sm:text-3xl sm:mt-8 tracking-wide text-slate-700 sm:text-gray-300">
          Explore the World! adventure today!
        </h3>
        <p className="text-center sm:w-4/6 font-extrabold text-sm sm:text-3xl sm:mt-8 tracking-wide text-slate-700 sm:text-gray-300">
          Check out available cities and book your next
        </p>
      </div>
    </div>
  );

  useEffect(() => {
    // Calcular dimensiones al montar el componente
    calculateDimensions();

    // Crear una versión "debounceada" de calculateDimensions
    const debouncedHandleResize = debounce(calculateDimensions, 500); // 300ms de retraso

    // Escuchar eventos de redimensionamiento
    window.addEventListener("resize", debouncedHandleResize);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
      debouncedHandleResize.cancel();
    };
  }, []);

  // Función para calcular dimensiones
  const calculateDimensions = () => {
    if (carouselRef.current) {
      const visibleWidthC = carouselRef.current.clientWidth;
      const itemWidth = visibleWidth / 5 + 25;
      const totalWidth = carouselRef.current.scrollWidth + itemWidth + 200;
      setStep(itemWidth);
      setMaxScrollAmount(totalWidth - visibleWidthC);
      setItemWidth(itemWidth); // Añade esta línea

      // Ajustar scrollAmount si es necesario
      setScrollAmount((prev) => {
        // Si el scrollAmount actual excede el nuevo maxScrollAmount, ajustarlo
        return prev > totalWidth - visibleWidthC
          ? totalWidth - visibleWidthC
          : prev;
      });
      setVisibleWidth(visibleWidthC);
    }
  };

  const handleNext = () => {
    setScrollAmount((prev) => {
      const newScrollAmount = Math.min(prev + step, maxScrollAmount);
      return newScrollAmount;
    });
  };

  const handlePrev = () => {
    setScrollAmount((prev) => {
      const newScrollAmount = Math.max(prev - step, 0);
      return newScrollAmount;
    });
  };

  // Funciones para manejar el arrastre
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    initialScroll.current = scrollAmount;
    setIsTransitioning(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX.current; // Distancia arrastrada
    let newScroll = initialScroll.current - walk;

    // Asegurarse de que newScroll esté dentro de los límites
    newScroll = Math.max(0, Math.min(newScroll, maxScrollAmount));
    setScrollAmount(newScroll);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsTransitioning(true);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsTransitioning(true);
  };

  const parallaxCont = 0.14;

  return (
    <div className="carousel-container">
      {scrollAmount > 0 && (
        <button className="carousel-btn left-btn" onClick={handlePrev}>
          ←
        </button>
      )}

      <div
        className="carousel-wrapper"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        // Opcional: para mejorar la experiencia en dispositivos táctiles
        onTouchStart={(e) => {
          const touch = e.touches[0];
          handleMouseDown({
            pageX: touch.pageX,
          });
        }}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          handleMouseMove({
            pageX: touch.pageX,
            preventDefault: () => e.preventDefault(),
          });
        }}
        onTouchEnd={handleMouseUp}
      >
        <div
          className="carousel"
          ref={carouselRef}
          style={{
            transform: `translateX(-${scrollAmount}px)`,
            transition: isTransitioning ? "transform 0.5s ease" : "none",
          }}
        >
          {text}
          {images.map((image, index) => {
            const elementPosition = index * itemWidth + visibleWidth / 3 + 25;
            const IsVisible = visibleWidth + scrollAmount > elementPosition;
            const maxImageTranslateX = -290;
            const amount =
              elementPosition > visibleWidth
                ? elementPosition - visibleWidth
                : 0;
            const imageTranslateX = IsVisible
              ? Math.max(
                  maxImageTranslateX,
                  -(scrollAmount - amount) * parallaxCont
                )
              : 0;
            return (
              <div key={index} className="carousel-item">
                <div
                  className="carousel-item-absolute"
                  style={{
                    transform: `translateX(${imageTranslateX}px)`,
                    transition: isTransitioning
                      ? "transform 0.5s ease"
                      : "none",
                  }}
                >
                  <img src={image} alt={`Imagen ${index + 1}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {scrollAmount < maxScrollAmount && (
        <button className="carousel-btn right-btn" onClick={handleNext}>
          →
        </button>
      )}
    </div>
  );
};

const CarouselFinal = () => {
  const carouselRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [step, setStep] = useState(0);
  const [maxScrollAmount, setMaxScrollAmount] = useState(0);
  const [visibleWidth, setVisibleWidth] = useState(0);

  // Estados para la funcionalidad de arrastrar
  const isDragging = useRef(false);
  const startX = useRef(0);
  const initialScroll = useRef(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [itemWidth, setItemWidth] = useState(0);

  const text = (
    <div className="carousel-text hidden lg:flex justify-between p-10">
      <div>
        <h3 className="font-display text-center sm:w-4/6 font-extrabold text-sm sm:text-3xl sm:mt-8 tracking-wide text-slate-700 sm:text-gray-300">
          Explore the World! adventure today!
        </h3>
        <p className="text-center sm:w-4/6 font-extrabold text-sm sm:text-3xl sm:mt-8 tracking-wide text-slate-700 sm:text-gray-300">
          Check out available cities and book your next
        </p>
      </div>
    </div>
  );

  useEffect(() => {
    // Calcular dimensiones al montar el componente
    calculateDimensions();

    // Crear una versión "debounceada" de calculateDimensions
    const debouncedHandleResize = debounce(calculateDimensions, 500); // 300ms de retraso

    // Escuchar eventos de redimensionamiento
    window.addEventListener("resize", debouncedHandleResize);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
      debouncedHandleResize.cancel();
    };
  }, []);

  // Función para calcular dimensiones
  const calculateDimensions = () => {
    if (carouselRef.current) {
      const visibleWidthC = carouselRef.current.clientWidth;
      const itemWidth = visibleWidth / 5 + 25;
      const totalWidth = carouselRef.current.scrollWidth + itemWidth + 200;
      setStep(itemWidth);
      setMaxScrollAmount(totalWidth - visibleWidthC);
      setItemWidth(itemWidth); // Añade esta línea

      // Ajustar scrollAmount si es necesario
      setScrollAmount((prev) => {
        // Si el scrollAmount actual excede el nuevo maxScrollAmount, ajustarlo
        return prev > totalWidth - visibleWidthC
          ? totalWidth - visibleWidthC
          : prev;
      });
      setVisibleWidth(visibleWidthC);
    }
  };

  const handleNext = () => {
    setScrollAmount((prev) => {
      const newScrollAmount = Math.min(prev + step, maxScrollAmount);
      return newScrollAmount;
    });
  };

  const handlePrev = () => {
    setScrollAmount((prev) => {
      const newScrollAmount = Math.max(prev - step, 0);
      return newScrollAmount;
    });
  };

  // Funciones para manejar el arrastre
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    initialScroll.current = scrollAmount;
    setIsTransitioning(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX.current; // Distancia arrastrada
    let newScroll = initialScroll.current - walk;

    // Asegurarse de que newScroll esté dentro de los límites
    newScroll = Math.max(0, Math.min(newScroll, maxScrollAmount));
    setScrollAmount(newScroll);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsTransitioning(true);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsTransitioning(true);
  };

  const parallaxCont = 0.14;

  return (
    <div className="carousel-container">
      {scrollAmount > 0 && (
        <button className="carousel-btn left-btn" onClick={handlePrev}>
          ←
        </button>
      )}

      <div
        className="carousel-wrapper"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        // Opcional: para mejorar la experiencia en dispositivos táctiles
        onTouchStart={(e) => {
          const touch = e.touches[0];
          handleMouseDown({
            pageX: touch.pageX,
          });
        }}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          handleMouseMove({
            pageX: touch.pageX,
            preventDefault: () => e.preventDefault(),
          });
        }}
        onTouchEnd={handleMouseUp}
      >
        <ul
          className="carousel"
          ref={carouselRef}
          style={{
            transform: `translateX(-${scrollAmount}px)`,
            transition: isTransitioning ? "transform 0.5s ease" : "none",
          }}
        >
 
          {images.map((image, index) => {
            const elementPosition = index * itemWidth + visibleWidth / 3 + 25;
            const IsVisible = visibleWidth + scrollAmount > elementPosition;
            const maxImageTranslateX = -290;
            const amount =
              elementPosition > visibleWidth
                ? elementPosition - visibleWidth
                : 0;
            const imageTranslateX = IsVisible
              ? Math.max(
                  maxImageTranslateX,
                  -(scrollAmount - amount) * parallaxCont
                )
              : 0;
            return (
              <li  key={index} className="carousel-item-container">
                <div className="carousel-item">
                  <div
                    className="carousel-item-absolute"
                    style={{
                      transform: `translateX(${imageTranslateX}px)`,
                      transition: isTransitioning
                        ? "transform 0.5s ease"
                        : "none",
                    }}
                  >
                    <img src={image} alt={`Imagen ${index + 1}`} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {scrollAmount < maxScrollAmount && (
        <button className="carousel-btn right-btn" onClick={handleNext}>
          →
        </button>
      )}
    </div>
  );
};
