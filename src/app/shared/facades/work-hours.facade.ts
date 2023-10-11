export class WorkHoursFacade {
  buildHoursOfWork(): string[] {
    const workHours: string[] = [];

    const initTime: number = 8;
    const finalizaeWork: number = 17;

    for (let i = initTime; i <= finalizaeWork; i++) {
      workHours.push(this.formatHours(i));
      workHours.push(this.formatHalfHours(i));
    }

    return workHours;
  }

  private formatHours(hour: number): string {
    if (hour <= 9) {
      return '0' + hour + ':00';
    }

    return hour + ':00';
  }

  private formatHalfHours(hour: number): string {
    if (hour <= 9) {
      return '0' + hour + ':30';
    }

    return hour + ':30';
  }
}
