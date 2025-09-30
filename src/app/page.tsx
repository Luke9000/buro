import { AnimatedTimeline } from "@/components/animata/AnimatedTimeline";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SlideIn } from "@/components/SlideIn";

import Image from "next/image";

import { v4 as uuid } from "uuid";

import { IMAGE_PATH } from "@/utils/assetPaths";
import { TextLoop } from "components/motion-primitives/text-loop";
import { Metadata } from "next";
import rf from "public/rf.avif";
import React from "react";
// import { Link } from "next-view-transitions";
import { ValuesBlock } from "@/components/ValuesBlock";
import { Link } from "next-view-transitions";
import { ParallaxImage } from "@/components/ParralaxImage";

const Projects = [
  {
    id: 1,
    key: uuid(),
    title: "Образовательные учреждения",
    description:
      "Строим безопасные и современные учебные заведения с продуманной инфраструктурой",
    image: IMAGE_PATH + "school.avif",
  },
  {
    id: 2,
    key: uuid(),
    title: "Учреждения здравоохранения",
    description:
      "Возводим клиники и больницы с акцентом на качество и функциональность",
    image: IMAGE_PATH + "health.avif",
  },
  {
    id: 3,
    key: uuid(),
    title: "Специальные объекты",
    description:
      "Реализуем нестандартные проекты с высокой точностью и качеством",
    image: IMAGE_PATH + "special.avif",
  },
  {
    id: 4,
    key: uuid(),
    title: "Резиденции",
    description:
      "Жилые комплексы премиум-класса с продуманной архитектурой и комфортом",
    image: IMAGE_PATH + "residence.avif",
  },
];

const Statistics = [
  {
    id: 1,
    key: uuid(),
    figure: 1,
    units: "год",
    text: "средний срок проектирования объекта",
    subtext: "включая изыскания и документацию",
    sign: false,
  },

  {
    id: 2,
    key: uuid(),
    figure: 10,
    units: "проектов",
    text: "находятся в работе одновременно",
    sign: true,
  },

  {
    id: 3,
    key: uuid(),
    figure: 30,
    units: "специалистов",
    text: "с уникальными компетенциями в своей области",
    sign: true,
  },

  {
    id: 4,
    key: uuid(),
    figure: 100000,
    units: "м²",
    text: "суммарная площадь проектируемых объектов",
    sign: true,
  },
];

const Stages = [
  {
    id: 1,
    key: uuid(),
    title: "Сбор исходно-разрешительной документации",
    description:
      "Получение необходимых для прохождения экспертизы и получения разрешения на строительство и ввод в эксплуатацию справок, обременений, технических условий и согласований от ресурсо-снабжающих организаций",
  },
  {
    id: 2,
    key: uuid(),
    title: "Инженерные изыскания",
    description:
      "Геодезические, геологические, экологические и гидрометеорологические изыскания, включая полевые и камеральные работы, с составлением отчета и прохождением экспертизы",
  },
  {
    id: 3,
    key: uuid(),
    title: "Техническое обследование и экспертиза зданий и сооружений",
    description:
      "Комплексное обследования технического состояния зданий и сооружений, строительных конструкций и инженерных систем с составление технического заключения на капитальный ремонт или реконструкцию",
  },
  {
    id: 4,
    key: uuid(),
    title: "Разработка проектной документации",
    description:
      "Разработка предпроектной документации, архитектурно-градостроительных решений, и документации стадии «П» для прохождения экспертизы",
  },
  {
    id: 5,
    key: uuid(),
    title: "Прохождение государственных и ведомственных экспертиз",
    description:
      "У БЮРО ест опыт успешного прохождения Московской государственной, Московской областной и других региональных и ведомственных экспертиз, Главной государственной экспертизы",
  },
  {
    id: 6,
    key: uuid(),
    title: "Разработка рабочей документации",
    description:
      "Выполнение детальных проектов стадии Р, включающих всю необходимую информацию для быстрого и качественного выполнения строительно-монтаж работ",
  },
  {
    id: 7,
    key: uuid(),
    title: "Ведение авторского надзора за строительством",
    description:
      "Специалисты БЮРО сопровождают весь процесс строительства непосредственно на площадке, контролируют отклонения и при необходимости своевременно внося изменения в документацию",
  },
];

const Roadmap = [
  {
    id: 1,
    key: uuid(),
    text: "Выполнение проектных работ по текущим контрактам",
  },
  {
    id: 2,
    key: uuid(),
    text: "Развитие бренда",
  },
  {
    id: 3,
    key: uuid(),
    text: "Развитие корпоративной культуры",
  },
  {
    id: 4,
    key: uuid(),
    text: "Развитие программ наставничества",
  },
  {
    id: 5,
    key: uuid(),
    text: "Индивидуальные планы развития сотрудников",
  },
  {
    id: 6,
    key: uuid(),
    text: "Кадровый резерв",
  },
  {
    id: 7,
    key: uuid(),
    text: "Диверсификация портфеля заказов",
  },
  {
    id: 8,
    key: uuid(),
    text: "Развитие стратегии бренда",
  },
];

// const Mission = [
//   "Мы участвуем в социальной функции государства, разрабатывая качественные архитектурно-строительные и инженерные проекты для реализации государственных программ в сфере строительства социально-значимых объектов",
//   "Мы образуем здоровую профессиональную ячейку общества, создавая гармоничную среду для развития и реализации сотрудников, и обучая молодых специалистов профессиональному и ответственному подходу к проектированию",
// ];

const Values = [
  {
    id: 1,
    key: uuid(),
    title: "ВЗАИМНОЕ ДОВЕРИЕ",
    text: "Доверие и прозрачность является фундаментом наших отношений с сотрудниками и заказчиками",
    highlightTitle: "ДОВЕРИЕ",
    highlightText: "",
  },
  {
    id: 2,
    key: uuid(),
    title: "ВЫПОЛНЕНИЕ ОБЯЗАТЕЛЬСТВ И РАБОТА НА РЕЗУЛЬТАТ",
    text: "Мы — команда, для которой результат является приоритетом. Если мы берем на себя обязательства по выполнению проектных работ, то всегда доводим их до конца",
    highlightTitle: "РАБОТА НА РЕЗУЛЬТАТ",
    highlightText: "",
  },
  {
    id: 3,
    key: uuid(),
    title: "БЕРЕЖНОЕ ОТНОШЕНИЕ ДРУГ К ДРУГУ И К ОКРУЖАЮЩЕЙ СРЕДЕ",
    text: "В нашей компании каждый человек ценен и важен. Мы создаем атмосферу поддержки и доверия, в которой каждый  сотрудник чувствует свою значимость и может раскрыть свой потенциал",
    highlightTitle: "БЕРЕЖНОЕ ОТНОШЕНИЕ",
    highlightText: "",
  },
  {
    id: 4,
    key: uuid(),
    title: "САМОМОТИВАЦИЯ",
    text: "Основой в совместной работе является внутренняя энергия сотрудников. Руководители компании подают личный пример и создают условия для самореализации.",
    highlightTitle: "",
    highlightText: "",
  },
  {
    id: 5,
    key: uuid(),
    title: "РАЗВИТИЕ И СОВЕРШЕНСТВОВАНИЕ",
    text: "Мы критически оцениваем свою работу и стремимся постоянно учиться и искать новые, более эффективные пути решения ежедневных задач.",
    highlightTitle: "РАЗВИТИЕ",
    highlightText: "",
  },
  {
    id: 6,
    key: uuid(),
    title: "СИЛЬНАЯ КОМАНДА",
    text: "Хороший результат работы возможен только у сильной команды. Именно поэтому мы уделяем особое внимание отношениям внутри команды и ее результативности.",
    highlightTitle: "КОМАНДА",
    highlightText: "",
  },
];

export const metadata: Metadata = {
  description:
    "Бюро 1189 — архитектурно-строительная компания, реализующая проекты для жизни и общества. Мы создаем современные жилые комплексы, образовательные и медицинские учреждения, а также объекты особого назначения.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section className="min-h-[95vh] h-fit  flex flex-col justify-center align-center md:items-center relative mt-12 md:mt-0 -mb-24">
        {/* -mt-[13vh] */}
        <div className="absolute w-full h-fit flex justify-center align-middle items-center">
          <Image
            unoptimized
            width={1200}
            height={720}
            className={` object-contain opacity-10`}
            alt="rf map"
            src={rf}
          ></Image>
        </div>
        <div className="flex flex-col justify-between w-fit gap-2 align-center ">
          <div className="flex items-end gap-3">
            <h1 className="w-fit text-8xl/19 font-semibold text-accent-higher">
              10
            </h1>
            <h1 className=" text-5xl font-semibold text-accent-higher">лет</h1>
          </div>
          <p className="text-xl md:text-2xl/7 font-semibold text-contrast-higher pl-2 lg:w-[25ch]">
            мы&nbsp;проектируем объекты жилой и&nbsp;социальной инфраструктуры
          </p>
        </div>
        <ul className="px-4 md:px-0 text-xs font-normal text-contrast-higher list-disc list-outside mt-22 flex flex-col md:flex-row gap-5 md:gap-7  marker:text-accent-higher">
          <li>Москва</li>
          <li>Россия</li>
          <li>Ближнее зарубежье</li>
        </ul>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 -mx-8 gap-0.5 bg-contrast-medium">
        {Projects.map((project) => (
          <div key={project.key} className="w-full h-84 relative">
            <ParallaxImage
              src={project.image}
              alt={project.title}
              className="brightness-25"
            />
            <div className="absolute top-10 left-10 md:top-12 md:left-12 w-3/5 text-contrast-lowest">
              <h1 className="text-2xl md:text-4xl font-semibold">
                {project.title}
              </h1>
              <p className="text-base/5 font-regular mt-7 text-contrast-lower2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <SlideIn direction="right">
        <h1 className="mb-20 font-semibold text-5xl  first-letter:inline-flex first-letter:items-center first-letter:justify-center first-letter:w-12 first-letter:h-1 first-letter:bg-accent-higher first-letter:text-white">
          Бюро в цифрах
        </h1>
        <section className="flex flex-col gap-10">
          {Statistics.map((stat) => (
            <SlideIn key={stat.key}>
              <div className="flex flex-col sm:items-center justify-between">
                <div className="relative xxs:w-fit w-full">
                  <NumberTicker
                    className="text-accent-higher text-6xl"
                    value={stat.figure}
                  />
                  <span className="absolute bottom-1.5 pl-1 text-contrast-medium">
                    {stat.units}
                  </span>
                </div>
                <p className="font-medium text-lg/5 md:text-lg  sm:text-center">
                  {stat.text}
                </p>
                {stat.subtext && (
                  <p className="text-contrast-low text-sm/3">{stat.subtext}</p>
                )}
              </div>
            </SlideIn>
          ))}
        </section>
      </SlideIn>

      <SlideIn direction="right">
        <h1 className=" mb-20 font-semibold text-5xl  first-letter:inline-flex first-letter:items-center first-letter:justify-center first-letter:w-12 first-letter:h-1 first-letter:bg-accent-higher first-letter:text-white">
          Состав работ
        </h1>
        <section className="flex flex-col -mx-8 ">
          {Stages.map((stage) => (
            <SlideIn key={stage.key}>
              <div
                className="flex items-center justify-between border-t-1 last:border-b-1 px-8 2xl:px-30 py-1"
                key={stage.key}
              >
                <p className="font-medium text-lg">{stage.title}</p>
                <div
                  className="w-22 h-22 bg-accent-higher flex flex-shrink-0 items-center justify-center text-white text-5xl font-bold"
                  style={{
                    clipPath:
                      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                  }}
                >
                  {stage.id}
                </div>
              </div>
            </SlideIn>
          ))}
        </section>
      </SlideIn>

      <SlideIn direction="left">
        <h1 className=" mb-20 font-semibold text-5xl  first-letter:inline-flex first-letter:items-center first-letter:justify-center first-letter:w-12 first-letter:h-1 first-letter:bg-accent-higher first-letter:text-white">
          План развития
        </h1>
        <AnimatedTimeline events={Roadmap}></AnimatedTimeline>
      </SlideIn>

      <div id="about" className="flex flex-col">
        <SlideIn className="" direction="left">
          <h1 className=" mb-20 font-semibold text-5xl  first-letter:inline-flex first-letter:items-center first-letter:justify-center first-letter:w-12 first-letter:h-1 first-letter:bg-accent-higher first-letter:text-white">
            Миссия и ценности
          </h1>
          <SlideIn className="mb-12 flex sm:justify-center items-center ">
            {/* <ShiftingText className='w-1/2 text-center' data={Mission} interval={3000}></ShiftingText> */}
            <TextLoop
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                mass: 0.8,
              }}
              interval={10}
              className="sm:w-1/2"
            >
              <p>
                Мы участвуем в социальной функции государства, разрабатывая{" "}
                <span className="text-accent-higher">
                  качественные архитектурно-строительные и инженерные проекты
                </span>{" "}
                для реализации государственных программ в сфере строительства
                социально-значимых объектов
              </p>
              <p>
                Мы образуем здоровую профессиональную ячейку общества, создавая
                <span className="text-accent-higher">
                  {" "}
                  гармоничную среду для развития и реализации сотрудников
                </span>
                , и обучая молодых специалистов профессиональному и
                ответственному подходу к проектированию
              </p>
            </TextLoop>
          </SlideIn>
        </SlideIn>
        <SlideIn>
          <div className="grid lg:grid-cols-2 grid-cols-1 md:-mx-8 -mx-4 border-b-1">
            {Values.map((value) => (
              <ValuesBlock
                key={value.key}
                title={value.title}
                text={value.text}
                highlightTitle={value.highlightTitle}
                highlightText={value.highlightText}
              ></ValuesBlock>
            ))}
          </div>
        </SlideIn>
        <Link className="py-8 w-full text-right" href="/about">
          <p className="text-contrast-low text-sm underline">
            Подробнее о компании
          </p>
        </Link>
      </div>
    </div>
  );
}
