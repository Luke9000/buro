import Accordion from "@/components/Accordion";
import { AnimatedTimeline } from "@/components/animata/AnimatedTimeline";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SlideIn } from "@/components/SlideIn";

import Image from "next/image";
import { ROADMAP } from "public/data/roadmap";

import { v4 as uuid } from "uuid";

import { IMAGE_PATH } from "@/utils/assetPaths";
import { Metadata } from "next";
import FAQ from "public/data/FAQ";
import rf from "public/rf.avif";

import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from "components/motion-primitives/carousel";
import { Link } from "next-view-transitions";
import { NEWS } from "public/data/news";

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

const Mission = [
  {
    id: 1,
    key: uuid(),
    text: "Мы участвуем в социальной функции государства, разрабатывая качественные архитектурно-строительные и инженерные проекты для реализации государственных программ в сфере строительства социально-значимых объектов",
  },
  {
    id: 2,
    key: uuid(),
    text: "Мы образуем здоровую профессиональную ячейку общества, создавая гармоничную среду для развития и реализации сотрудников, и обучая молодых специалистов профессиональному и ответственному подходу к проектированию",
  },
];

const Values = [
  {
    id: 1,
    key: uuid(),
    title: "ВЗАИМНОЕ ДОВЕРИЕ",
    description:
      "Доверие и прозрачность является фундаментом наших отношений с сотрудниками и заказчиками",
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

      <SlideIn direction="bottom" duration={0.5} opacity={1}>
        <section className="grid grid-cols-1 lg:grid-cols-2 -mx-8 gap-0.5 bg-contrast-medium">
          {Projects.map((project) => (
            <div key={project.key} className="w-full h-84 relative">
              <Image
                unoptimized
                width={1200}
                height={720}
                className="object-cover h-full w-full brightness-25"
                alt={project.title}
                src={project.image}
              ></Image>
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
      </SlideIn>

      <SlideIn direction="right">
        <h1 className="mb-20 font-semibold text-5xl  first-letter:inline-flex first-letter:items-center first-letter:justify-center first-letter:w-12 first-letter:h-1 first-letter:bg-accent-higher first-letter:text-white">
          Бюро в цифрах
        </h1>
        <section className="flex flex-col gap-10">
          {Statistics.map((stat) => (
            <SlideIn key={stat.key}>
              <div
                className="flex flex-col sm:items-center justify-between"
                
              >
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

      <SlideIn direction="right">
        <section className="mt-20 flex flex-col lg:flex-row align-middle items-center justify-center lg:justify-between lg:gap-2 gap-5">
          <div className="flex flex-col gap-2 items-center w-2/3 lg:w-full ">
            <div className="w-full  h-34 bg-contrast-medium text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-4xl"
                value={9}
              />
            </div>
            <p className="font-medium text-center text-sm">месяцев обучения</p>
          </div>

          <div className="flex flex-col gap-2 items-center w-2/3 lg:w-full  ">
            <div className="w-full  h-34 bg-contrast-high text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-4xl"
                value={5}
              />
            </div>
            <p className="font-medium text-center text-sm">IT-компетенций</p>
          </div>

          <div className="flex flex-col gap-2 items-center w-2/3 lg:w-full  ">
            <div className="w-full  h-34 bg-contrast-high-2 text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-4xl"
                value={3}
              />
            </div>
            <p className="font-medium text-center text-sm">формата обучения</p>
          </div>

          <div className="flex flex-col gap-2 items-center w-6/7 lg:w-full ">
            <div className="w-full  h-44 bg-accent-higher text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-6xl"
                value={2}
              />
            </div>
            <p className="font-medium text-center text-sm ">
              диплома по окончании ВУЗа
            </p>
          </div>
        </section>
      </SlideIn>

      <SlideIn direction="left">
        <section className=" flex flex-col items-center justify-center">
          <h1 className="font-semibold text-4xl">
            Кто может стать участником?
          </h1>
          <h2 className="font-semibold text-base md:w-1/2 md:text-center mt-4">
            Для зачисления на Цифровую кафедру ПРОМТЕХДИЗАЙН в&nbsp;2025 году
            необходимо
          </h2>
          <div className="flex flex-col xl:flex-row justify-between gap-2 w-full mt-8">
            <div className="relative overflow-hidden bg-contrast-lower2  rounded-xl p-4  w-full justify-between   flex flex-col gap-8">
              <div className="flex sm:flex-row justify-between">
                <h2 className="text-l  font-semibold w-9/10  sm:w-7/10">
                  Обучение на 2 курсе бакалавриата или специалитета
                </h2>
                <div className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 rounded-full font-semibold text-contrast-lowest bg-accent-higher text-center">
                  <p className="">1</p>
                </div>
              </div>
              <p className="text-xs font-medium   sm:w-9/10">
                Не пройдено обучение на Цифровой кафедре ранее
              </p>
            </div>
            <div className="relative overflow-hidden bg-contrast-lower2  rounded-xl p-4  w-full justify-between   flex flex-col gap-8">
              <div className="flex sm:flex-row justify-between">
                <h2 className="text-l   font-semibold w-9/10  sm:w-7/10">
                  Специальность не относится к IT-сфере
                </h2>
                <div className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 rounded-full font-semibold text-contrast-lowest bg-accent-higher text-center">
                  <p className="">2</p>
                </div>
              </div>
              <p className="text-xs font-medium   sm:w-9/10">
                Подробный список специальностей доступен в разделе «Направления»
              </p>
            </div>
            <div className="relative overflow-hidden bg-contrast-lower2  rounded-xl p-4  w-full justify-between   flex flex-col gap-8">
              <div className="flex sm:flex-row justify-between">
                <h2 className="text-l   font-semibold w-9/10  sm:w-7/10">
                  Прохождение вводного курса
                </h2>
                <div className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 rounded-full font-semibold text-contrast-lowest bg-accent-higher text-center">
                  <p className="">3</p>
                </div>
              </div>
              <p className="text-xs font-medium   sm:w-9/10">
                Пройдено тестирование по окончании вводного курса
              </p>
            </div>
          </div>
        </section>
        <p className="text-contrast-lower text-xs mt-2">
          Студенты других ВУЗов могут уточнить информацию о зачислении по
          электронной почте: dc-info@sutd.ru
        </p>
      </SlideIn>

      <SlideIn direction="left">
        <h1 className="text-4xl ml-auto font-semibold lg:text-center mb-6">
          Дорожная карта
        </h1>
        <AnimatedTimeline events={ROADMAP}></AnimatedTimeline>
      </SlideIn>

      <div className="flex flex-col gap-4">
        <SlideIn direction="left">
          <section className="rounded-2xl h-fit bg-contrast-high-2 p-0 lg:p-8 flex flex-row items-center relative overflow-hidden">
            <div className="border-accent-higher lg:border-l-2 lg:w-2/3 h-fit p-4 lg:p-4 text-contrast-lowest flex flex-col gap-3">
              <h2 className="text-3xl lg:text-3xl font-semibold">
                О проекте «Цифровые кафедры»
              </h2>
              <p className="text-xs lg:text-base">
                Проект реализован в вузах-участниках программы стратегического
                лидерства «Приоритет 2030» федерального проекта «Развитие
                кадрового потенциала ИТ-отрасли», в&nbsp;рамках национальной
                программы «Цифровая&nbsp;экономика Российской&nbsp;Федерации»
                <br></br>
                <br></br>В университете ПРОМТЕХДИЗАЙН реализуется на{" "}
                <b>базе кафедры Цифровых и&nbsp;аддитивных&nbsp;технологий</b>
              </p>
            </div>
            {/* <RedCircle className="fill-contrast-high w-60 absolute overflow-hidden -right-30 hidden lg:block"></RedCircle> */}
          </section>
        </SlideIn>
        <SlideIn
          className="w-full flex justify-center align-center"
          direction="left"
        >
          <section className="h-fit flex flex-col xl:flex-row gap-6 md:gap-2 xl:w-7/8 flex-wrap justify-center">
            {/* Блок 1 */}
            <div className="w-full xl:w-[70%] bg-contrast-lower2 text-contrast-higher font-semibold py-4 h-fit rounded-2xl px-6 flex flex-col lg:flex-row lg:items-center lg:gap-4">
              <div className="text-xl flex flex-row items-center">
                {/* <span>{">"}</span> */}
                <NumberTicker
                  className="text-contrast-higher text-3xl"
                  value={129}
                />
              </div>
              <div className="text-sm">
                <p>
                  университетов‑участников программы создали «Цифровые кафедры»
                </p>
                {/* <p className="text-contrast-low">(на май 2024)</p> */}
              </div>
            </div>
            {/* Блок 2 */}
            <div className="h-100% w-full xl:w-[45%] bg-contrast-lower2 text-contrast-higher font-semibold py-4  rounded-2xl px-6">
              <div className="text-xl">
                {/* <span>{">"}</span> */}
                <NumberTicker
                  className="text-contrast-higher text-3xl"
                  value={231936}
                />
                <span>{" чел."}</span>
              </div>
              <div className="text-sm">
                <p>прошли обучение на Цифровых кафедрах к 2025 году</p>
              </div>
            </div>
            {/* Блок 3 */}
            <div className="w-full xl:w-[40%] bg-contrast-lower2 text-contrast-higher font-semibold py-4 h-100% rounded-2xl px-6">
              <div className="text-xl">
                {/* <span>{">"}</span> */}
                <NumberTicker
                  className="text-contrast-higher text-3xl"
                  value={935570}
                />
                <span>{" чел."}</span>
              </div>
              <div className="text-sm">
                <p>
                  студентов получат дополнительную квалификацию по IT-профилю к
                  2030 году
                </p>
              </div>
            </div>
            {/* Блок 4 */}
            <div className="w-full xl:w-[calc(85%+0.5rem)] bg-contrast-lower2 text-contrast-higher font-semibold py-4 lg:h-fit rounded-2xl px-6 flex flex-col lg:flex-row lg:items-center lg:gap-4">
              <div className="text-xl ">
                <span>{">"}</span>
                <NumberTicker
                  className="text-contrast-higher text-3xl"
                  value={1600}
                />
              </div>
              <div className="text-sm">
                <span>компаний-партнёров «Цифровых кафедр» в 2024 году</span>
              </div>
            </div>
            <p className="text-xs font-regular text-contrast-lower">
              *Данные ФГАНУ «Социоцентр» МИНОБРНАУКИ России за 2024-2025 учебный
              год
            </p>
          </section>
        </SlideIn>
      </div>
      <div>
        <h1 className="mb-6 text-3xl  font-semibold lg:text-center ">
          О Цифровой кафедре ПРОМТЕХДИЗАЙН
        </h1>
        <section className=" flex flex-col lg:flex-row gap-6 md:gap-6 lg:items-center">
          <SlideIn>
            <div className="flex flex-col gap-8 w-[1/3]">
              <Image
                unoptimized
                className="border-accent-higher rounded-full border-4 w-45 p-3"
                quality={100}
                width={331}
                height={331}
                alt="Soshnikov A.V."
                src={IMAGE_PATH + "misc/soshnikov.avif"}
              ></Image>
              <div className="border-l-3 border-accent-higher pl-4">
                <h2 className="text-xl font-semibold">
                  Антон Владимирович Сошников
                </h2>
                <p className="text-sm text-[color:var(--color-contrast-high)] xl:w-64">
                  Руководитель Цифровой кафедры, заведующий кафедрой «Цифровых
                  и&nbsp;аддитивных технологий», кандидат технических наук,
                  доцент
                </p>
              </div>
            </div>
          </SlideIn>
          <SlideIn
            direction="right"
            className="flex flex-wrap justify-end gap-2 xl:w-2/3 h-fit"
          >
            {/* Блок 1 */}
            <div className=" w-full  bg-accent-higher text-contrast-lowest font-semibold p-4 h-fit rounded-2xl px-6 py-6 flex flex-row items-center gap-4 sm:flex-nowrap flex-wrap">
              <div className="text-3xl flex flex-row">
                <NumberTicker className="text-contrast-lowest" value={2100} />
                <span>{"+"}</span>
              </div>
              <div className="text-sm font-medium">
                <p>обучающихся на ЦК ПРОМТЕХДИЗАЙН</p>
              </div>
            </div>
            {/* <div className="hidden xl:block xl:w-2/5 bg-transparent p-4 h-fit rounded-2xl px-6 py-8"></div> */}
            {/* Блок 2 */}
            <div className="w-full xl:w-[40%] bg-contrast-high-2 text-contrast-lowest font-semibold  h-100% rounded-2xl px-6 py-6 flex flex-row items-center gap-4 sm:flex-nowrap  2xl:flex-nowrap xl:flex-wrap ">
              <div className="text-3xl flex flex-row">
                <NumberTicker className="text-contrast-lowest" value={40} />
                <span>{"+"}</span>
              </div>
              <div className="text-sm font-medium">
                <p>кураторов-наставников</p>
              </div>
            </div>
            {/* Блок 3 */}
            <div className="h-full w-full xl:flex-1 bg-contrast-high-2 text-contrast-lowest font-semibold p-4 rounded-2xl px-6 py-6 flex flex-row items-center gap-4 2xl:flex-nowrap xl:flex-wrap sm:flex-nowrap flex-wrap ">
              <div className="text-3xl flex flex-row">
                <NumberTicker className="text-contrast-lowest" value={20} />
                <span>{"+"}</span>
              </div>
              <div className="text-sm font-medium">
                <p>преподавателей из IT-отрасли, реального сектора экономики</p>
              </div>
            </div>
            {/* Блок 4 */}
            <div className="basis-full w-full xl:w-[calc(85%+0.5rem)] bg-contrast-lower text-contrast-higher font-semibold p-4 h-fit rounded-2xl px-6 py-6 flex flex-row items-center gap-4 sm:flex-nowrap flex-wrap">
              <div className="text-3xl flex flex-row">
                <NumberTicker className="text-contrast-higher" value={10} />
                <span>{"+"}</span>
              </div>
              <div className="text-sm font-medium">
                <span>
                  профильных компаний, привлеченных для прохождения практики
                </span>
              </div>
            </div>
            {/* <p className="text-xs font-regular text-contrast-low">
              *по данным МИНОБРНАУКИ России за 2023-2024 учебный год
            </p> */}
          </SlideIn>
        </section>
      </div>

      <div>
        <h1 className="text-3xl  font-semibold lg:text-center ">
          Динамика обучения
        </h1>
        <SlideIn
          className="mt-6 md:flex-row-reverse flex-col items-center md:items-baseline flex gap-10"
          direction="left"
        >
          {/*1 block*/}
          <div className="md:w-1/3 w-full">
            <p>учебный год</p>
            <p className="mt-1 font-semibold">2024-2025</p>
            <div className="flex flex-row items-center relative">
              {/*red circle*/}
              <div className="min-w-3.5 max-w-3.5 w-3.5 h-3.5 rounded-full bg-transparent border-3 border-accent-higher flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-accent-higher"></div>
              </div>
              {/*red line*/}
              <div className="my-4 h-0 w-full  border-t-2 border-accent-higher"></div>
              {/*red circle*/}
              <div className="min-w-3.5 max-w-3.5 w-3.5 h-3.5 rounded-full bg-transparent border-3 border-accent-higher flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-accent-higher"></div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-semibold">2142</p>
                <p className="text-xs">зачислено</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">1919</p>
                <p className="text-xs">закончили</p>
              </div>
            </div>
          </div>
          {/*2 block*/}
          <div className="md:w-1/3 w-full text-contrast-low">
            <p>учебный год</p>
            <p className="mt-1 font-semibold">2023-2024</p>
            <div className="flex flex-row items-center relative">
              {/*red circle*/}
              <div className="min-w-3.5 max-w-3.5 w-3.5 h-3.5 rounded-full bg-transparent border-3 border-contrast-low flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-contrast-low"></div>
              </div>
              {/*red line*/}
              <div className="my-4 h-0 w-full  border-t-2 border-contrast-low"></div>
              {/*red circle*/}
              <div className="min-w-3.5 max-w-3.5 w-3.5 h-3.5 rounded-full bg-transparent border-3 border-contrast-low flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-contrast-low"></div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-semibold">2122</p>
                <p className="text-xs">зачислено</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">1915</p>
                <p className="text-xs">закончили</p>
              </div>
            </div>
          </div>
          {/*3 block*/}
          <div className="md:w-1/3 w-full text-contrast-lower">
            <p>учебный год</p>
            <p className="mt-1 font-semibold">2022-2023</p>
            <div className="flex flex-row items-center relative">
              {/*red circle*/}
              <div className="min-w-3.5 max-w-3.5  w-3.5 h-3.5 rounded-full bg-transparent border-3 border-contrast-lower flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-contrast-lower"></div>
              </div>
              {/*red line*/}
              <div className="my-4 h-0 w-full  border-t-2 border-contrast-lower"></div>
              {/*red circle*/}
              <div className="min-w-3.5 max-w-3.5 w-3.5 h-3.5 rounded-full bg-transparent border-3 border-contrast-lower flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-contrast-lower"></div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-semibold">1413</p>
                <p className="text-xs">зачислено</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">1178</p>
                <p className="text-xs">закончили</p>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>

      <div>
        <h1 className="mb-6 text-3xl  font-semibold lg:text-center ">
          Новости
        </h1>
        <div className="w-full flex justify-center ">
          <Carousel className=" w-full">
            <CarouselContent className=" w-full  mb-9">
              {NEWS.map((item) => (
                <CarouselItem
                  key={`${item.title}`}
                  className="  md:pl-2 md:basis-1/2 xl:basis-1/3  pr-2 last:pr-0"
                >
                  <div className="h-64 md:h-65 xl:h-76 text-contrast-higher   rounded-2xl  flex flex-col items-center gap-4 sm:flex-nowrap flex-wrap">
                    <div className=" flex flex-col gap-4 h-full ">
                      <div className="h-32 2xl:h-40 overflow-hidden">
                        <Image
                          draggable={false}
                          unoptimized
                          className="rounded-xl w-full  object-cover object-top"
                          quality={100}
                          width={1200}
                          height={800}
                          alt={item.title}
                          src={IMAGE_PATH + "news/" + item.id + ".avif"}
                        ></Image>
                      </div>
                      <div className="px-6 flex flex-col gap-2 flex-1">
                        <p className="text-contrast-high text-xs font-normal">
                          {item.date}
                        </p>
                        <h3 className="font-semibold text-xs">{item.title}</h3>
                        {/* <p className="text-contrast-lowest bg-accent-higher w-fit rounded-xl p-2 text-xs font-normal mt-auto">
                          Цифровая кафедра
                        </p> */}
                        <Link
                          className="mt-auto "
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {/* <MoveRight
                            className="bg-contrast-lower rounded-full w-9 h-9 p-2 stroke-contrast-lowest"
                            scale={2}
                          /> */}
                          <p className="text-xs text-contrast-low underline ">
                            Читать далее
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselIndicator />
          </Carousel>
        </div>
      </div>

      {/* <div>
        <h1 className="-mb-6 text-3xl  font-semibold lg:text-center ">
          Партнеры проекта
        </h1>
        <SlideIn className="-mb-20" direction="right">
          <InfiniteSlider gap={24}>
            {partners.map((partner, index) => (
              <Image
                unoptimized
                width={300}
                height={300}
                key={index}
                className={`p-8 object-contain ${
                  partner.w ? `w-${partner.w}` : "w-48"
                } `}
                alt={partner.alt}
                src={partner.src}
              ></Image>
            ))}
          </InfiniteSlider>
        </SlideIn>
      </div> */}

      <div>
        <h1 className="mb-6 text-3xl  font-semibold lg:text-center ">
          Вопрос-Ответ
        </h1>
        <Accordion data={FAQ}></Accordion>
      </div>
    </div>
  );
}
