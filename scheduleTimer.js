async function scheduleTimer({
  providerRes,
  parserRes
} = {}) {
  return {
    totalWeek: 20, // 总周数：[1, 30]之间的整数
    forenoon: 4, // 上午课程节数：[1, 10]之间的整数
    afternoon: 4, // 下午课程节数：[0, 10]之间的整数
    night: 3, // 晚间课程节数：[0, 10]之间的整数
    sections: [{
      section: 1,
      startTime: '08:00',
      endTime: '08:45',
    },{
      section: 2,
      startTime: '08:55',
      endTime: '09:40',
    },{
      section: 3,
      startTime: '10:00',
      endTime: '10:45',
    },{
      section: 4,
      startTime: '10:55',
      endTime: '11:40',
    },{
      section: 5,
      startTime: '13:40',
      endTime: '14:25',
    },{
      section: 6,
      startTime: '14:35',
      endTime: '15:20',
    },{
      section: 7,
      startTime: '15:40',
      endTime: '16:25',
    },{
      section: 8,
      startTime: '16:35',
      endTime: '17:20',
    },{
      section: 9,
      startTime: '18:50',
      endTime: '19:35',
    },{
      section: 10,
      startTime: '19:45',
      endTime: '20:30',
    },{
      section: 11,
      startTime: '20:40',
      endTime: '21:25',
    }],
  }
}
