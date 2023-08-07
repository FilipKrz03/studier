import { outdatedEventsDelater } from "@/app/dashboard/redux-store/event-slice";
import { isHourAvaliableChecker } from "@/app/dashboard/redux-store/lesson-slice";
import { Event } from "@/types/Event";
import { Lesson } from "@/types/Lesson";

const exampleOutdatedEventsArray: Event[] = [
  {
    id: 1,
    date: "2022-05-05",
    subject: "History",
    category: "Short-Test",
    description: "Though Test",
  },
  {
    id: 2,
    date: "2022-02-08",
    subject: "Geo",
    category: "Test",
    description: "Though",
  },
];

const exampleNonOutdatedEventsArray: Event[] = [
  {
    id: 1,
    date: "2024-09-09",
    subject: "History",
    category: "Short-Test",
    description: "Though Test",
  },
  {
    id: 2,
    date: "2024-10-10",
    subject: "Geo",
    category: "Test",
    description: "Though",
  },
];

const exampleMixedEventsArray: Event[] = [
  {
    id: 1,
    date: "2022-09-09",
    subject: "History",
    category: "Short-Test",
    description: "Though Test",
  },
  {
    id: 2,
    date: "2024-10-10",
    subject: "Geo",
    category: "Test",
    description: "Though",
  },
];

test("Properly check if event is outdated", () => {
  expect(outdatedEventsDelater(exampleOutdatedEventsArray)).toStrictEqual([]);

  expect(outdatedEventsDelater(exampleNonOutdatedEventsArray)).toStrictEqual(
    exampleNonOutdatedEventsArray
  );

  expect(outdatedEventsDelater(exampleMixedEventsArray)).toStrictEqual([
    {
      id: 2,
      date: "2024-10-10",
      subject: "Geo",
      category: "Test",
      description: "Though",
    },
  ]);
});

const exampleLessonsArray: Lesson[] = [
  {
    id: 2,
    startTime: { hour: 10, minute: 10 },
    endTime: { hour: 11, minute: 30 },
    day: "Monday",
    subject: "Test",
    teacher: "Test",
  },
  {
    id: 3,
    startTime: { hour: 12, minute: 20 },
    endTime: { hour: 13, minute: 30 },
    day: "Friday",
    subject: "Test",
    teacher: "Test",
  },
  {
    id: 4,
    startTime: { hour: 15, minute: 10 },
    endTime: { hour: 18, minute: 30 },
    day: "Tuesday",
    subject: "Test",
    teacher: "Test",
  },
];

test("Properly check if hour is avaliable", () => {
  expect(
    isHourAvaliableChecker(exampleLessonsArray, {
      id: 4,
      startTime: { hour: 16, minute: 10 },
      endTime: { hour: 19, minute: 30 },
      day: "Tuesday",
      subject: "Test",
      teacher: "Test",
    })
  ).toBe(false);

  expect(
    isHourAvaliableChecker(exampleLessonsArray, {
      id: 4,
      startTime: { hour: 16, minute: 10 },
      endTime: { hour: 19, minute: 30 },
      day: "Wednesday",
      subject: "Test",
      teacher: "Test",
    })
  ).toBe(true);

  expect(
    isHourAvaliableChecker(exampleLessonsArray, {
      id: 4,
      startTime: { hour: 11, minute: 35 },
      endTime: { hour: 13, minute: 30 },
      day: "Monday",
      subject: "Test",
      teacher: "Test",
    })
  ).toBe(true);
});
