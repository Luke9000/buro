import React from "react";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center -mx-4 md:-mx-8 relative">
      <div className="absolute w-full h-full mt-12 sm:mt-0 lg:-mt-8 flex lg:gap-0 gap-4 flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 p-16 sm:p-12     pointer-events-none">
        <div className="hidden lg:block"></div>
        <div className=" bg-contrast-higher/70 lg:w-64 rounded-xl h-fit p-4 lg:justify-self-end mt-16">
          <h3 className="text-contrast-lowest text-xl font-medium mb-3">
            По всем вопросам
          </h3>
          <p className="text-contrast-lower2 text-sm pointer-events-auto font-regular ">
            info@buro1189.ru
          </p>
          <p className="text-contrast-lower2 text-sm pointer-events-auto">
            8 (926) 010-74-38
          </p>
        </div>
        <div className="mt-auto bg-contrast-higher/70 lg:w-64 rounded-xl h-fit p-4 lg:justify-self-start lg:self-end">
          <h3 className="text-contrast-lowest text-xl font-medium mb-3">
            На проходной
          </h3>
          <p className="text-contrast-lower2 text-sm pointer-events-auto font-regular">
            Вход по паспорту или правам
          </p>
        </div>
        <div className=" bg-contrast-higher/70 lg:w-64 rounded-xl h-fit p-4 justify-self-end lg:self-end">
          <h3 className="text-contrast-lowest text-xl font-medium mb-3">
            В здании
          </h3>
          <p className="text-contrast-lower2 text-sm pointer-events-auto font-regular">
            1 подъезд, лестница справа от рекламного монитора, 3 этаж, стеклянные двери
          </p>
        </div>
      </div>
      <iframe
        title="Адрес на карте"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.8823431697797!2d37.65501621276346!3d55.84735637300722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b536907a66ff47%3A0xaeb33d95913a047e!2z0JHQpiDQodC40LvRjNCy0LXRgCDQodGC0L7Rg9C9!5e0!3m2!1sru!2sru!4v1758617924022!5m2!1sru!2sru"
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default page;
