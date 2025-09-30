import { HorizontalTextImage } from "@/components/HorizontalTextImage";
import { ImportantText } from "@/components/ImportantText";
import { SlideIn } from "@/components/SlideIn";
import { IMAGE_PATH } from "@/utils/assetPaths";
import clsx from "clsx";
import { Metadata } from "next";
import { v4 as uuid } from "uuid";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "Структуре и внутреннее устройство компании",
};

const aboutData = [
  {
    alt: "мы всегда прорабатываем процесс выполнения",
    src: IMAGE_PATH + "about/plan.avif",
    key: uuid(),
    children: (
      <p>
        При проектировании объекта{" "}
        <em className="not-italic text-accent-higher">
          мы всегда прорабатываем процесс выполнения
        </em>{" "}
        и рентабельности строительно-монтажных работ и ставим себе задачу ввода
        объекта в эксплуатацию.
      </p>
    ),
  },
  {
    alt: "Среди наших проектов – многочисленные объекты образования",
    src: IMAGE_PATH + "about/harsh_conditions.avif",
    key: uuid(),
    children: (
      <p>
        Среди наших проектов – многочисленные объекты образования,
        здравоохранения, специальные и{" "}
        <em className="not-italic text-accent-higher">уникальные объекты</em> в{" "}
        <em className="not-italic text-accent-higher">особо сложных</em>{" "}
        сейсмических и климатических условиях.
      </p>
    ),
  },
  {
    alt: "Большая часть наших объектов расположена в Москве",
    src: IMAGE_PATH + "about/distant.avif",
    key: uuid(),
    children: (
      <p>
        Большая часть наших объектов расположена в{" "}
        <em className="not-italic text-accent-higher">Москве</em>, но есть и
        объекты на{" "}
        <em className="not-italic text-accent-higher">
          территории России и стран СНГ.
        </em>
      </p>
    ),
  },
];

const structure = [
  {
    text: ["Бюро главных инженеров проекта", "Отдел сопровождения проектов"],
    key: uuid(),
  },
  {
    text: [
      "Отдел архитектурных решений",
      "Сметно-договорной отдел",
      "Административный отдел",
      "Отдел генерального плана",
    ],
    key: uuid(),
  },
  {
    text: [
      "Отдел конструктивных решений",
      "Отдел систем электроснабжения",
      "Отдел водопровода и канализации",
      "Отдел слаботочных систем",
      "Отдел технической экспертизы и обследований",
      "Отдел отопления, вентиляции и кондиционирования воздуха",
    ],
    key: uuid(),
  },
];

const page = () => {
  return (
    <div className="flex flex-col">
      <ImportantText>
        <p>
          БЮРО 1189 – это{" "}
          <em className="not-italic text-accent-higher">
            коллектив единомышленников
          </em>
          , более 10 лет реализующих сложные проекты в области социальной
          инфраструктуры.
        </p>
      </ImportantText>
      <section className="">
        {aboutData.map((item) => (
          <HorizontalTextImage key={item.key} alt={item.alt} src={item.src}>
            {item.children}
          </HorizontalTextImage>
        ))}
      </section>

      <SlideIn className="my-12" direction="right">
        <h1 className="mb-20 font-semibold text-5xl  first-letter:inline-flex first-letter:items-center first-letter:justify-center first-letter:w-12 first-letter:h-1 first-letter:bg-accent-higher first-letter:text-white">
          Структура
        </h1>
        <section className="flex flex-col gap-20 px-6 md:px-16 2xl:px-52">
          {structure.map((level, idx) => (
            <SlideIn
              key={level.key}
              className={clsx(
                " flex sm:flex-row border-l-2 border-accent-higher md:pl-8 pl-4",
                idx == 0 && "text-2xl font-medium"
              )}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-y-8 gap-x-12 w-full">
                {level.text.map((item, index) => (
                  <p className="" key={index}>{item}</p>
                ))}
              </div>
            </SlideIn>
          ))}
        </section>
      </SlideIn>

      <ImportantText>
        <p>
          Заказчики выбирают нас как{" "}
          <em className="not-italic text-accent-higher">
            надежного и вовлеченного партнера
          </em>{" "}
          для своих проектов.
        </p>
      </ImportantText>
    </div>
  );
};

export default page;
