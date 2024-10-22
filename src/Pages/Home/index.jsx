import { useState, useEffect, useRef } from "react";
import ContainerMain from "../../Layouts/ContainerMain";
import ScreenContainer from "../../Layouts/ScreenContainer";
import ScreenHelperContainer from "../../Layouts/ScreenHelperContainer";
import debounce from "lodash.debounce";
import "./home.css";
import { NavLink } from "react-router-dom";

const styles = {
  backgroundImage: `url("https://images.pexels.com/photos/4239622/pexels-photo-4239622.jpeg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Home() {
  return (
    <>
      <div style={styles} className="hero-background">
        <ContainerMain>
          <div className="hero-texts">
            <h1 className="title">MyTinerary</h1>
            <p className="subtitle">
              Find your perfect trip, designed by insiders who know and love
              their cities
            </p>
          </div>
        </ContainerMain>
      </div>
      <ScreenContainer classToAdd="carrousel-stats">
        <div className="flex flex-col justify-center h-full">
        <p style={{color: "#d9d0c5",fontFamily: "Magilio", fontSize: "2rem", display: "inline" }}>Soon...</p>
        </div>
      </ScreenContainer>

      <ScreenHelperContainer classToAdd="section-phone">
        <h3>Explore the World!</h3>
        <p>Check out available cities and book your next adventure today!</p>
      </ScreenHelperContainer>
      <ScreenContainer classToAdd="carrousel-main">
        <CarouselFinal></CarouselFinal>
      </ScreenContainer>

      {/* <div style={styles} className="h-screen w-screen flex justify-center">
        <ContainerMain></ContainerMain>
      </div> */}
    </>
  );
}

const images = [
  {
    url: "https://images.pexels.com/photos/15109259/pexels-photo-15109259/free-photo-of-silhouetted-part-of-the-chureito-pagoda-and-mount-fuji-in-the-background-fujiyoshida-japan.jpeg",
    city: "Fujiyoshida",
    country: "Japan",
    continent: "Asia",
    description:
      "Iconic view of Mount Fuji behind the Chureito Pagoda, a sacred and touristic site in Japan.",
  },
  {
    url: "https://images.pexels.com/photos/12910823/pexels-photo-12910823.jpeg",
    city: "Paris",
    country: "France",
    continent: "Europe",
    description:
      "The Eiffel Tower at sunset, one of the most famous landmarks in the world and a symbol of France.",
  },
  {
    url: "https://images.pexels.com/photos/6294532/pexels-photo-6294532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    city: "Mexico City",
    country: "Mexico",
    continent: "North America",
    description:
      "The Palace of Fine Arts, a prominent cultural and artistic center in Mexico City.",
  },
  {
    url: "https://images.pexels.com/photos/27428519/pexels-photo-27428519/free-photo-of-the-roman-colosseum-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    city: "Rome",
    country: "Italy",
    continent: "Europe",
    description:
      "The Roman Colosseum, one of the most emblematic architectural wonders of the Roman Empire.",
  },
  {
    url: "https://images.pexels.com/photos/912897/pexels-photo-912897.jpeg",
    city: "New York",
    country: "United States",
    continent: "North America",
    description:
      "The iconic Brooklyn Bridge connecting Manhattan with Brooklyn, one of New York’s most recognized structures.",
  },
  {
    url: "https://images.pexels.com/photos/1929611/pexels-photo-1929611.jpeg",
    city: "London",
    country: "United Kingdom",
    continent: "Europe",
    description:
      "The famous Big Ben next to Parliament, a symbol of the British government and a tourist icon.",
  },
  {
    url: "https://images.pexels.com/photos/12238221/pexels-photo-12238221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    city: "Toronto",
    country: "Canada",
    continent: "North America",
    description:
      "The Toronto skyline with the CN Tower, one of the tallest buildings in the world and a symbol of the city.",
  },
  {
    url: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "Cairo",
    country: "Egypt",
    continent: "Africa",
    description:
      "View of the Pyramids of Giza, one of the greatest architectural achievements of Egyptian civilization.",
  },
  {
    url: "https://images.pexels.com/photos/3290070/pexels-photo-3290070.jpeg",
    city: "Venice",
    country: "Italy",
    continent: "Europe",
    description:
      "The canals of Venice, a unique city built on water with its network of bridges and gondolas.",
  },
  {
    url: "https://images.pexels.com/photos/1682794/pexels-photo-1682794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    city: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    description:
      "The modern skyline of Dubai with the Burj Khalifa, the tallest building in the world.",
  },
  {
    url: "https://images.pexels.com/photos/19283363/pexels-photo-19283363/free-photo-of-taxis-on-street-in-hong-kong.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    city: "Hong Kong",
    country: "China",
    continent: "Asia",
    description:
      "The vibrant streets of Hong Kong with its characteristic red taxis and modern architecture.",
  },
  {
    url: "https://images.pexels.com/photos/15009437/pexels-photo-15009437/free-photo-of-ferryboat-cruising-near-the-sydney-opera-house.jpeg",
    city: "Sydney",
    country: "Australia",
    continent: "Oceania",
    description:
      "The famous Sydney Opera House by the harbor, one of the most recognized architectural wonders of Australia.",
  },
];

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
      const itemElements =
        carouselRef.current.getElementsByClassName("carrousel-item");

      const areThereElementes = itemElements.length > 0;
      const itemStyle = areThereElementes
        ? getComputedStyle(itemElements[0])
        : 0;

      const itemWidthC = areThereElementes ? parseFloat(itemStyle.width) : 0;
      console.log(getComputedStyle(itemElements[0]));
      console.log(itemStyle.marginRight);
      console.log(itemStyle.width);
      console.log(itemWidthC);
      console.log(parseFloat(itemStyle.width));

      setItemWidth(itemWidthC); //Same value Step
      setStep(itemWidthC); //Same value Step
      const totalWidth = carouselRef.current.scrollWidth;
      setMaxScrollAmount(totalWidth - visibleWidthC);

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

  // console.log("itemWidth", itemWidth);
  // console.log("step", step);
  // console.log("visibleWidth", visibleWidth);
  // console.log("maxScrollAmount", maxScrollAmount);
  // console.log("scrollAmount", scrollAmount);

  return (
    <div className="carrousel-container">
      {scrollAmount > 0 && (
        <button className="carrousel-btn left-btn" onClick={handlePrev}>
          ←
        </button>
      )}

      <ul
        className="carrousel"
        ref={carouselRef}
        style={{
          transform: `translateX(-${scrollAmount}px)`,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
        }}
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
        <li className="carrousel-item-text">
          <div className="carrousel-text-container">
            <h3>Explore the World!</h3>
            <p>
              Check out available cities and book your next adventure today!
            </p>
          </div>
        </li>
        {images.map((image, index) => {
          const parallaxCont = visibleWidth >= 640 ? 0.25 : 0.5;
          const itemInitial = visibleWidth >= 1024 ? visibleWidth * 0.4 : 0;
          const elementPosition = index * itemWidth + itemInitial;
          const actualPosition = visibleWidth + scrollAmount;
          const IsVisible = actualPosition >= elementPosition;
          if (IsVisible) {
            console.log("scrollAmount", scrollAmount);
            console.log("index", index + 1);
            console.log("elementPosition", elementPosition);
            console.log("visibleWidth", visibleWidth);
            console.log("actual view", visibleWidth + scrollAmount);
            console.log("itemWidth", itemWidth);
          }
          const maxImageTranslateX = -itemWidth * 1.2;
          const amountToTranslate =
            elementPosition > visibleWidth
              ? actualPosition - elementPosition
              : scrollAmount;
          const imageTranslateX = IsVisible
            ? Math.max(maxImageTranslateX, -amountToTranslate * parallaxCont)
            : 0;
          return (
            <li key={index} className="carrousel-item">
              <div className="carrousel-item-container">
                <div
                  className="carrousel-item-image"
                  style={{
                    transform: `translateX(${imageTranslateX}px)`,
                    transition: isTransitioning
                      ? "transform 0.5s ease"
                      : "none",
                    pointerEvents: isTransitioning ? "all" : "none",
                  }}
                >
                  <img src={image.url} alt={`Imagen ${index + 1}`} />
                </div>
                <div className="continent-carrousel">
                  <p>{image.continent.toUpperCase()}</p>
                </div>
                <NavLink
                  className="nav-carrousel"
                  style={{ pointerEvents: isTransitioning ? "all" : "none" }}
                >
                  <div>
                    <h3 className="city-carrousel">
                      {image.city},<span>{image.country}</span>
                    </h3>
                  </div>
                  <div className="description-carrousel">
                    <p>{image.description}</p>
                  </div>
                  <button>Discover More</button>
                </NavLink>
              </div>
            </li>
          );
        })}
      </ul>

      {scrollAmount < maxScrollAmount && (
        <button className="carrousel-btn right-btn" onClick={handleNext}>
          →
        </button>
      )}
    </div>
  );
};
