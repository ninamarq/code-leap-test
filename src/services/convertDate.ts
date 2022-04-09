export function convertDate(date: Date | undefined) {
  // NOW
  const nowDate = new Date();
  const nowTime = nowDate.toString().split(" ")[4];
  const nowHourString = nowTime.split(":")[0];
  const nowMinutes = nowTime.split(":")[1];
  const nowHour = Number(nowHourString) + 3;
  // Created time
  const dateToString = date?.toString();
  const dateSplited = dateToString?.split("T");
  const time = dateSplited?.[1].split(":");
  const hourCreated = time?.[0];
  const minutesCreated = time?.[1];
  const differenceMinutes = Number(nowMinutes) - Number(minutesCreated);
  const differenceHour = nowHour - Number(hourCreated);

  if (nowHour === Number(hourCreated)) {
    return differenceMinutes === 0
      ? "seconds ago"
      : `${
          differenceMinutes < 1 ? differenceMinutes * -1 : differenceMinutes
        } minutes ago`;
  }

  return `${
    differenceHour < 1 ? differenceHour * -1 : differenceHour
  } minutes ago`;
}
