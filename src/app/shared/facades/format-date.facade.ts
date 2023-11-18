export class FormatDateFacade {
  formatMonth(month: number): string {
    month += 1;

    if (month <= 9) return '0' + month;

    return month.toString();
  }

  formatDay(day: number): string {
    if (day <= 9) return '0' + day;

    return day.toString();
  }
}
