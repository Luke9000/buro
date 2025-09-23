import LogoBW from "../icons/LogoBW";

const index = () => {
  return (
    <footer className="py-6 flex sm:flex-row flex-col  bg-contrast-higher text-contrast-lowest w-full px-2 sm:px-8 sm:py-2 items-center text-center sm:text-start">
      <div className=" flex flex-col text-xs gap-4 sm:gap-1 w-full">
        <p className="  ">
          info@buro1189.ru
        </p>
        <p>8 (926) 010-74-38</p>
        <p>129343, г. Москва, пр-д Серебрякова, д. 14, стр. 15, 2 этаж, БЦ «Сильвер Стоун»</p>
      </div>
      <LogoBW className="w-30 -mr-3"></LogoBW>
    </footer>
  );
};

export default index;
