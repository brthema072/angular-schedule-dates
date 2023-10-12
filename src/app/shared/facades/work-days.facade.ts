export type WorkDays = {
  weekDay: string;
  monthDay: string;
};

export class WorkDaysFacade {
  buildWorkDatesForHeader(workDaysByWeek: string[]): string[] {
    let nextSevenDays: WorkDays[] = [];

    nextSevenDays = this.buildWorkDaysAfterDate(workDaysByWeek);
    this.buildWorkDaysBeforeDate(workDaysByWeek, nextSevenDays);

    nextSevenDays = nextSevenDays
      .filter((element) => element.weekDay != undefined)
      .sort(
        (a, b) =>
          workDaysByWeek.indexOf(a.weekDay) - workDaysByWeek.indexOf(b.weekDay)
      );

    return nextSevenDays.map((element) => element.monthDay);
  }

  private buildWorkDaysAfterDate(workDaysByWeek: string[]): WorkDays[] {
    const today = new Date();
    let nextSixDays: WorkDays[] = [];

    for (let i = 0; i < today.getDay() - 1; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const weekDay = workDaysByWeek[date.getDay() - 1];

      const formattedDate = date.toLocaleDateString('pt-Br');

      nextSixDays.push({ weekDay, monthDay: formattedDate });
    }

    return nextSixDays;
  }

  private buildWorkDaysBeforeDate(
    workDaysByWeek: string[],
    nextSixDays: WorkDays[]
  ) {
    const today = new Date();

    for (let i = 1; i <= today.getDay(); i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const weekDay = workDaysByWeek[date.getDay() - 1];

      const formattedDate = date.toLocaleDateString('pt-Br');

      nextSixDays.push({ weekDay, monthDay: formattedDate });
    }
  }
}
