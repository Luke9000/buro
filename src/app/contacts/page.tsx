import { Metadata } from "next";
import React from "react";
import { List } from "./List";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Адрес, телефон, почта и прочие контактные данные",
};

const data = [
  {
    title: "НА МАШИНЕ",
    children: [
      "Машины подъезжают к воротам.",
      "Для машин есть парковка на территории.",
      " Пропуск на автомобиль заказывается заранее – для этого потребуется направить нам ФИО водителя, пассажиров, а также марку, модель и гос.номер автомобиля полностью.",
    ],
  },
  {
    title: "ПЕШКОМ",
    children: [
      <b key="id-1" className="font-medium">
        При себе необходимо иметь документ, удостоверяющий личность (паспорт или
        права).
      </b>,
      "Для прохода на территорию нужно заранее заказать пропуска – для этого нужно ФИО всех участников.",
      "Пешеходы проходят через КПП (стеклянная дверь под надписью Сильвер Стоун).",
      "Справа от выхода из КПП на территории увидите 15 строение и в нем подъезд №1 (сверху надпись ОАК). Заходите в раздвижные двери и по прямой ресепшн, от него поворачиваете направо и по лестнице на 2 этаж, там увидите стеклянные двери и вас там встретят.",
    ],
  },
];

const page = () => {
  return (
    <div className="flex flex-col border-t-1 -mx-4 md:-mx-8 min-h-screen">
      <div className="grid  justify-center gap-4 grid-cols-1 xl:grid-cols-2 md:px-8 px-4 py-8 xl:py-12">
        {data.map((item, idx) => (
          <List key={idx} title={item.title}>
            {item.children}
          </List>
        ))}
      </div>

      <iframe
        loading="lazy"
        title="Адрес на карте"
        src="https://yandex.ru/map-widget/v1/org/silver_stoun/152058280892/?indoorLevel=1&ll=37.658777%2C55.847172&z=16.57"
        width=""
        height=""
        frameBorder="1"
        className="w-full flex-1 min-h-92"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default page;
