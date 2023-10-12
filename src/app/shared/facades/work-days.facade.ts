export type WorkDays = {
  weekDay: string;
  monthDay: string;
};

export class WorkDaysFacade {
  buildWorkDatesForHeader(workDaysByWeek: string[]): string[] {
    const today = new Date();
    let nextSevenDays: WorkDays[] = [];

    for (let i = 0; i < today.getDay() - 1; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const weekDay = workDaysByWeek[date.getDay() - 1];

      const formattedDate = date.toLocaleDateString('pt-Br');

      nextSevenDays.push({ weekDay, monthDay: formattedDate });
    }

    for (let i = 1; i <= today.getDay(); i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const weekDay = workDaysByWeek[date.getDay() - 1];

      const formattedDate = date.toLocaleDateString('pt-Br');

      nextSevenDays.push({ weekDay, monthDay: formattedDate });
    }

    nextSevenDays = nextSevenDays
      .filter((element) => element.weekDay != undefined)
      .sort(
        (a, b) =>
          workDaysByWeek.indexOf(a.weekDay) - workDaysByWeek.indexOf(b.weekDay)
      );

    return nextSevenDays.map((element) => element.monthDay);
  }
}
